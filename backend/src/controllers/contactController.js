const contactService = require('../services/contactService');
const { asyncHandler, successResponse, errorResponse } = require('../middleware/errorHandler');

/**
 * Create new contact form submission
 */
const createContact = asyncHandler(async (req, res) => {
  const contact = await contactService.createContact(req.body);
  successResponse(res, contact, 'Contact form submitted successfully', 201);
});

/**
 * Get all contacts with filtering and pagination (Admin only)
 */
const getContacts = asyncHandler(async (req, res) => {
  const filters = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    search: req.query.search,
    status: req.query.status,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await contactService.getContacts(filters);
  successResponse(res, result, 'Contacts retrieved successfully');
});

/**
 * Get contact by ID (Admin only)
 */
const getContactById = asyncHandler(async (req, res) => {
  const contact = await contactService.getContactById(req.params.id);
  successResponse(res, contact, 'Contact retrieved successfully');
});

/**
 * Update contact status (Admin only)
 */
const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  
  if (!status || !['UNREAD', 'READ', 'REPLIED', 'CLOSED'].includes(status)) {
    return errorResponse(res, 'Valid status is required', 400);
  }

  const updatedContact = await contactService.updateContactStatus(req.params.id, status);
  successResponse(res, updatedContact, 'Contact status updated successfully');
});

/**
 * Delete contact (Admin only)
 */
const deleteContact = asyncHandler(async (req, res) => {
  await contactService.deleteContact(req.params.id);
  successResponse(res, null, 'Contact deleted successfully');
});

/**
 * Get contact statistics (Admin only)
 */
const getContactStats = asyncHandler(async (req, res) => {
  const stats = await contactService.getContactStats();
  successResponse(res, stats, 'Contact statistics retrieved successfully');
});

/**
 * Reply to contact (Admin only)
 */
const replyToContact = asyncHandler(async (req, res) => {
  const { replyMessage } = req.body;
  
  if (!replyMessage || replyMessage.trim().length === 0) {
    return errorResponse(res, 'Reply message is required', 400);
  }

  const replyData = {
    replyMessage: replyMessage.trim(),
    adminId: req.admin.id
  };

  const updatedContact = await contactService.replyToContact(req.params.id, replyData);
  successResponse(res, updatedContact, 'Reply sent successfully');
});

/**
 * Bulk update contact status (Admin only)
 */
const bulkUpdateStatus = asyncHandler(async (req, res) => {
  const { contactIds, status } = req.body;

  if (!contactIds || !Array.isArray(contactIds) || contactIds.length === 0) {
    return errorResponse(res, 'Contact IDs array is required', 400);
  }

  if (!status || !['UNREAD', 'READ', 'REPLIED', 'CLOSED'].includes(status)) {
    return errorResponse(res, 'Valid status is required', 400);
  }

  const result = await contactService.bulkUpdateStatus(contactIds, status);
  successResponse(res, result, `${result.count} contacts updated successfully`);
});

/**
 * Bulk delete contacts (Admin only)
 */
const bulkDeleteContacts = asyncHandler(async (req, res) => {
  const { contactIds } = req.body;

  if (!contactIds || !Array.isArray(contactIds) || contactIds.length === 0) {
    return errorResponse(res, 'Contact IDs array is required', 400);
  }

  const result = await contactService.bulkDeleteContacts(contactIds);
  successResponse(res, result, `${result.count} contacts deleted successfully`);
});

/**
 * Export contacts to CSV (Admin only)
 */
const exportContacts = asyncHandler(async (req, res) => {
  const filters = {
    search: req.query.search,
    status: req.query.status
  };

  const csvData = await contactService.exportContactsToCSV(filters);
  
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename=contacts_${new Date().toISOString().split('T')[0]}.csv`);
  
  res.send(csvData);
});

/**
 * Get contact trends (Admin only)
 */
const getContactTrends = asyncHandler(async (req, res) => {
  const trends = await contactService.getContactTrends();
  successResponse(res, trends, 'Contact trends retrieved successfully');
});

/**
 * Mark multiple contacts as read (Admin only)
 */
const markAsRead = asyncHandler(async (req, res) => {
  const { contactIds } = req.body;

  if (!contactIds || !Array.isArray(contactIds) || contactIds.length === 0) {
    return errorResponse(res, 'Contact IDs array is required', 400);
  }

  const result = await contactService.bulkUpdateStatus(contactIds, 'READ');
  successResponse(res, result, `${result.count} contacts marked as read`);
});

/**
 * Mark multiple contacts as unread (Admin only)
 */
const markAsUnread = asyncHandler(async (req, res) => {
  const { contactIds } = req.body;

  if (!contactIds || !Array.isArray(contactIds) || contactIds.length === 0) {
    return errorResponse(res, 'Contact IDs array is required', 400);
  }

  const result = await contactService.bulkUpdateStatus(contactIds, 'UNREAD');
  successResponse(res, result, `${result.count} contacts marked as unread`);
});

/**
 * Get unread contacts count (Admin only)
 */
const getUnreadCount = asyncHandler(async (req, res) => {
  const filters = { status: 'UNREAD' };
  const result = await contactService.getContacts(filters);
  successResponse(res, { count: result.pagination.total }, 'Unread contacts count retrieved successfully');
});

module.exports = {
  createContact,
  getContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
  replyToContact,
  bulkUpdateStatus,
  bulkDeleteContacts,
  exportContacts,
  getContactTrends,
  markAsRead,
  markAsUnread,
  getUnreadCount
};