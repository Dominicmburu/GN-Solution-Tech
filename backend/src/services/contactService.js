const { PrismaClient } = require('@prisma/client');
const { AppError } = require('../middleware/errorHandler');
const emailService = require('./emailService');

const prisma = new PrismaClient();

class ContactService {
  /**
   * Create new contact form submission
   * @param {Object} contactData - Contact form data
   * @returns {Object} Created contact
   */
  async createContact(contactData) {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message
    } = contactData;

    const contact = await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        status: 'UNREAD'
      }
    });

    // Send notification email to admin (optional)
    try {
      await emailService.sendContactNotification(contact);
    } catch (error) {
      console.error('Failed to send contact notification email:', error);
      // Don't throw error here, contact form submission should still succeed
    }

    // Send confirmation email to user
    try {
      await emailService.sendContactConfirmation(contact);
    } catch (error) {
      console.error('Failed to send contact confirmation email:', error);
    }

    return contact;
  }

  /**
   * Get all contacts with filtering and pagination
   * @param {Object} filters - Filter options
   * @returns {Object} Paginated contacts list
   */
  async getContacts(filters = {}) {
    const {
      page = 1,
      limit = 10,
      search,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = filters;

    const skip = (page - 1) * limit;
    const where = {};

    // Apply filters
    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { subject: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (status) {
      where.status = status;
    }

    // Get total count
    const total = await prisma.contact.count({ where });

    // Get contacts
    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { [sortBy]: sortOrder },
      skip,
      take: limit
    });

    return {
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Get contact by ID
   * @param {string} id - Contact ID
   * @returns {Object} Contact data
   */
  async getContactById(id) {
    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    if (!contact) {
      throw new AppError('Contact not found', 404);
    }

    // Mark as read if it was unread
    if (contact.status === 'UNREAD') {
      await prisma.contact.update({
        where: { id },
        data: { status: 'READ' }
      });
      contact.status = 'READ';
    }

    return contact;
  }

  /**
   * Update contact status
   * @param {string} id - Contact ID
   * @param {string} status - New status
   * @returns {Object} Updated contact
   */
  async updateContactStatus(id, status) {
    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    if (!contact) {
      throw new AppError('Contact not found', 404);
    }

    const updatedContact = await prisma.contact.update({
      where: { id },
      data: { status }
    });

    return updatedContact;
  }

  /**
   * Delete contact
   * @param {string} id - Contact ID
   */
  async deleteContact(id) {
    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    if (!contact) {
      throw new AppError('Contact not found', 404);
    }

    await prisma.contact.delete({
      where: { id }
    });
  }

  /**
   * Get contact statistics
   * @returns {Object} Contact statistics
   */
  async getContactStats() {
    const [
      totalContacts,
      unreadContacts,
      readContacts,
      repliedContacts,
      closedContacts,
      recentContacts
    ] = await Promise.all([
      prisma.contact.count(),
      prisma.contact.count({ where: { status: 'UNREAD' } }),
      prisma.contact.count({ where: { status: 'READ' } }),
      prisma.contact.count({ where: { status: 'REPLIED' } }),
      prisma.contact.count({ where: { status: 'CLOSED' } }),
      prisma.contact.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          subject: true,
          status: true,
          createdAt: true
        }
      })
    ]);

    return {
      totalContacts,
      unreadContacts,
      readContacts,
      repliedContacts,
      closedContacts,
      recentContacts
    };
  }

  /**
   * Reply to contact
   * @param {string} id - Contact ID
   * @param {Object} replyData - Reply data
   * @returns {Object} Updated contact
   */
  async replyToContact(id, replyData) {
    const { replyMessage, adminId } = replyData;

    const contact = await prisma.contact.findUnique({
      where: { id }
    });

    if (!contact) {
      throw new AppError('Contact not found', 404);
    }

    // Update contact status to replied
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: { status: 'REPLIED' }
    });

    // Send reply email
    try {
      await emailService.sendContactReply(contact, replyMessage);
    } catch (error) {
      console.error('Failed to send contact reply email:', error);
      throw new AppError('Failed to send reply email', 500);
    }

    return updatedContact;
  }

  /**
   * Bulk update contact status
   * @param {Array} contactIds - Array of contact IDs
   * @param {string} status - New status
   * @returns {Object} Update result
   */
  async bulkUpdateStatus(contactIds, status) {
    const result = await prisma.contact.updateMany({
      where: {
        id: { in: contactIds }
      },
      data: { status }
    });

    return result;
  }

  /**
   * Bulk delete contacts
   * @param {Array} contactIds - Array of contact IDs
   * @returns {Object} Delete result
   */
  async bulkDeleteContacts(contactIds) {
    const result = await prisma.contact.deleteMany({
      where: {
        id: { in: contactIds }
      }
    });

    return result;
  }

  /**
   * Export contacts to CSV
   * @param {Object} filters - Filter options
   * @returns {string} CSV data
   */
  async exportContactsToCSV(filters = {}) {
    const { search, status } = filters;
    const where = {};

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { subject: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (status) {
      where.status = status;
    }

    const contacts = await prisma.contact.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    });

    // Convert to CSV format
    const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Subject', 'Message', 'Status', 'Created At'];
    
    const csvRows = [
      headers.join(','),
      ...contacts.map(contact => [
        contact.id,
        `"${contact.firstName}"`,
        `"${contact.lastName}"`,
        contact.email,
        contact.phone || '',
        `"${contact.subject}"`,
        `"${contact.message.replace(/"/g, '""')}"`, // Escape quotes in message
        contact.status,
        contact.createdAt.toISOString()
      ].join(','))
    ];

    return csvRows.join('\n');
  }

  /**
   * Get contact trends (last 30 days)
   * @returns {Array} Contact trends data
   */
  async getContactTrends() {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const contacts = await prisma.contact.findMany({
      where: {
        createdAt: {
          gte: thirtyDaysAgo
        }
      },
      select: {
        createdAt: true,
        status: true
      }
    });

    // Group by date
    const trends = {};
    contacts.forEach(contact => {
      const date = contact.createdAt.toISOString().split('T')[0];
      if (!trends[date]) {
        trends[date] = {
          date,
          total: 0,
          unread: 0,
          read: 0,
          replied: 0,
          closed: 0
        };
      }
      trends[date].total++;
      trends[date][contact.status.toLowerCase()]++;
    });

    return Object.values(trends).sort((a, b) => new Date(a.date) - new Date(b.date));
  }
}

module.exports = new ContactService();