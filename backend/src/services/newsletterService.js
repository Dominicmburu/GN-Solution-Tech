const { PrismaClient } = require('@prisma/client');
const { AppError } = require('../middleware/errorHandler');
const emailService = require('./emailService');

const prisma = new PrismaClient();

class NewsletterService {
    /**
     * Subscribe to newsletter
     * @param {string} email - Subscriber email
     * @returns {Object} Subscription result
     */
    async subscribe(email) {

        const normalizedEmail = email.toLowerCase().trim();

        // Check if email already exists
        const existingSubscriber = await prisma.newsletter.findUnique({
            where: { email: normalizedEmail }
        });

        if (existingSubscriber) {
            if (existingSubscriber.isActive) {
                return existingSubscriber;
            } else {
                // Reactivate subscription
                const updatedSubscriber = await prisma.newsletter.update({
                    where: { email },
                    data: { isActive: true }
                });

                // Send welcome back email
                try {
                    await emailService.sendNewsletterWelcomeBack(email);
                } catch (error) {
                    console.error('Failed to send welcome back email:', error);
                }

                return updatedSubscriber;
            }
        }

        // Create new subscription
        const subscriber = await prisma.newsletter.create({
            data: { email }
        });

        // Send welcome email
        try {
            await emailService.sendNewsletterWelcome(email);
        } catch (error) {
            console.error('Failed to send newsletter welcome email:', error);
        }

        // Notify admin
        try {
            await emailService.sendNewsletterAdminNotification(email);
        } catch (error) {
            console.error('Failed to send admin notification:', error);
        }

        return subscriber;
    }

    /**
     * Unsubscribe from newsletter
     * @param {string} email - Subscriber email
     * @returns {Object} Unsubscription result
     */
    async unsubscribe(email) {
        const subscriber = await prisma.newsletter.findUnique({
            where: { email }
        });

        if (!subscriber) {
            throw new AppError('Email not found in newsletter subscriptions', 404);
        }

        const updatedSubscriber = await prisma.newsletter.update({
            where: { email },
            data: { isActive: false }
        });

        // Send unsubscribe confirmation
        try {
            await emailService.sendNewsletterUnsubscribeConfirmation(email);
        } catch (error) {
            console.error('Failed to send unsubscribe confirmation:', error);
        }

        return updatedSubscriber;
    }

    /**
     * Get all subscribers with filtering and pagination
     * @param {Object} filters - Filter options
     * @returns {Object} Paginated subscribers list
     */
    async getSubscribers(filters = {}) {
        const {
            page = 1,
            limit = 10,
            search,
            isActive,
            sortBy = 'createdAt',
            sortOrder = 'desc'
        } = filters;

        const skip = (page - 1) * limit;
        const where = {};

        if (search) {
            where.email = { contains: search, mode: 'insensitive' };
        }

        if (typeof isActive === 'boolean') {
            where.isActive = isActive;
        }

        const [subscribers, total] = await Promise.all([
            prisma.newsletter.findMany({
                where,
                orderBy: { [sortBy]: sortOrder },
                skip,
                take: limit
            }),
            prisma.newsletter.count({ where })
        ]);

        return {
            subscribers,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit)
            }
        };
    }

    /**
     * Get newsletter statistics
     * @returns {Object} Newsletter statistics
     */
    async getNewsletterStats() {
        const [
            totalSubscribers,
            activeSubscribers,
            inactiveSubscribers,
            recentSubscribers
        ] = await Promise.all([
            prisma.newsletter.count(),
            prisma.newsletter.count({ where: { isActive: true } }),
            prisma.newsletter.count({ where: { isActive: false } }),
            prisma.newsletter.findMany({
                where: { isActive: true },
                orderBy: { createdAt: 'desc' },
                take: 5,
                select: {
                    id: true,
                    email: true,
                    createdAt: true
                }
            })
        ]);

        return {
            totalSubscribers,
            activeSubscribers,
            inactiveSubscribers,
            recentSubscribers
        };
    }

    /**
     * Export subscribers to CSV
     * @param {Object} filters - Filter options
     * @returns {string} CSV data
     */
    async exportSubscribersToCSV(filters = {}) {
        const { search, isActive } = filters;
        const where = {};

        if (search) {
            where.email = { contains: search, mode: 'insensitive' };
        }

        if (typeof isActive === 'boolean') {
            where.isActive = isActive;
        }

        const subscribers = await prisma.newsletter.findMany({
            where,
            orderBy: { createdAt: 'desc' }
        });

        const headers = ['ID', 'Email', 'Status', 'Subscribed At'];

        const csvRows = [
            headers.join(','),
            ...subscribers.map(subscriber => [
                subscriber.id,
                subscriber.email,
                subscriber.isActive ? 'Active' : 'Inactive',
                subscriber.createdAt.toISOString()
            ].join(','))
        ];

        return csvRows.join('\n');
    }

    // Add these methods to your existing newsletterService.js

    /**
     * Delete subscriber by ID
     * @param {string} id - Subscriber ID
     */
    async deleteSubscriber(id) {
        const subscriber = await prisma.newsletter.findUnique({
            where: { id }
        });

        if (!subscriber) {
            throw new AppError('Subscriber not found', 404);
        }

        await prisma.newsletter.delete({
            where: { id }
        });
    }

    /**
     * Toggle subscriber status
     * @param {string} id - Subscriber ID
     * @returns {Object} Updated subscriber
     */
    async toggleSubscriberStatus(id) {
        const subscriber = await prisma.newsletter.findUnique({
            where: { id }
        });

        if (!subscriber) {
            throw new AppError('Subscriber not found', 404);
        }

        const updatedSubscriber = await prisma.newsletter.update({
            where: { id },
            data: { isActive: !subscriber.isActive }
        });

        return updatedSubscriber;
    }

    /**
     * Bulk import subscribers
     * @param {Array} emails - Array of email addresses
     * @returns {Object} Import results
     */
    async bulkImportSubscribers(emails) {
        const results = {
            successful: 0,
            failed: 0,
            duplicates: 0,
            errors: []
        };

        for (const email of emails) {
            try {
                const trimmedEmail = email.toLowerCase().trim();

                // Validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(trimmedEmail)) {
                    results.failed++;
                    results.errors.push({ email: trimmedEmail, error: 'Invalid email format' });
                    continue;
                }

                // Check if already exists
                const existing = await prisma.newsletter.findUnique({
                    where: { email: trimmedEmail }
                });

                if (existing) {
                    results.duplicates++;
                    continue;
                }

                // Create new subscriber
                await prisma.newsletter.create({
                    data: { email: trimmedEmail }
                });

                results.successful++;

                // Send welcome email (optional, might want to skip for bulk imports)
                try {
                    await emailService.sendNewsletterWelcome(trimmedEmail);
                } catch (error) {
                    console.error(`Failed to send welcome email to ${trimmedEmail}:`, error);
                }

            } catch (error) {
                results.failed++;
                results.errors.push({ email, error: error.message });
            }
        }

        return results;
    }

    /**
     * Bulk delete subscribers
     * @param {Array} subscriberIds - Array of subscriber IDs
     * @returns {Object} Delete result
     */
    async bulkDeleteSubscribers(subscriberIds) {
        const result = await prisma.newsletter.deleteMany({
            where: {
                id: { in: subscriberIds }
            }
        });

        return result;
    }

    /**
     * Bulk update subscriber status
     * @param {Array} subscriberIds - Array of subscriber IDs
     * @param {boolean} isActive - New active status
     * @returns {Object} Update result
     */
    async bulkUpdateStatus(subscriberIds, isActive) {
        const result = await prisma.newsletter.updateMany({
            where: {
                id: { in: subscriberIds }
            },
            data: { isActive }
        });

        return result;
    }

    /**
     * Send newsletter to subscribers (Future feature)
     * @param {Object} newsletterData - Newsletter data
     * @returns {Object} Send results
     */
    async sendNewsletter(newsletterData) {
        const { subject, content, recipientType, senderId } = newsletterData;

        // Get recipients based on type
        let where = {};
        if (recipientType === 'active') {
            where.isActive = true;
        } else if (recipientType === 'inactive') {
            where.isActive = false;
        }
        // 'all' means no filter

        const subscribers = await prisma.newsletter.findMany({
            where,
            select: { email: true }
        });

        const results = {
            recipientCount: subscribers.length,
            successful: 0,
            failed: 0,
            errors: []
        };

        // This would typically be done with a queue system for large newsletters
        for (const subscriber of subscribers) {
            try {
                await emailService.sendNewsletterBroadcast(subscriber.email, subject, content);
                results.successful++;
            } catch (error) {
                results.failed++;
                results.errors.push({ email: subscriber.email, error: error.message });
            }
        }

        return results;
    }

    /**
     * Get newsletter trends
     * @param {number} days - Number of days to look back
     * @returns {Array} Newsletter trends data
     */
    async getNewsletterTrends(days = 30) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - days);

        const subscribers = await prisma.newsletter.findMany({
            where: {
                createdAt: {
                    gte: startDate
                }
            },
            select: {
                createdAt: true,
                isActive: true
            }
        });

        // Group by date
        const trends = {};
        subscribers.forEach(subscriber => {
            const date = subscriber.createdAt.toISOString().split('T')[0];
            if (!trends[date]) {
                trends[date] = {
                    date,
                    total: 0,
                    active: 0,
                    inactive: 0
                };
            }
            trends[date].total++;
            if (subscriber.isActive) {
                trends[date].active++;
            } else {
                trends[date].inactive++;
            }
        });

        return Object.values(trends).sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    /**
     * Get subscriber by email
     * @param {string} email - Subscriber email
     * @returns {Object} Subscriber data
     */
    async getSubscriberByEmail(email) {
        const subscriber = await prisma.newsletter.findUnique({
            where: { email: email.toLowerCase().trim() }
        });

        if (!subscriber) {
            throw new AppError('Subscriber not found', 404);
        }

        return subscriber;
    }
}

module.exports = new NewsletterService();