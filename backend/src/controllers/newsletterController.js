const newsletterService = require('../services/newsletterService');
const { asyncHandler, successResponse, errorResponse } = require('../middleware/errorHandler');

/**
 * Subscribe to newsletter
 */
const subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  
  const subscriber = await newsletterService.subscribe(email.toLowerCase().trim());
  successResponse(res, 
    { 
      email: subscriber.email, 
      subscribed: true,
      message: 'Welcome to GN Solutions newsletter!' 
    }, 
    'Successfully subscribed to newsletter!', 
    201
  );
});

/**
 * Unsubscribe from newsletter
 */
const unsubscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;
  
  await newsletterService.unsubscribe(email.toLowerCase().trim());
  successResponse(res, 
    { 
      email: email.toLowerCase().trim(), 
      unsubscribed: true 
    }, 
    'Successfully unsubscribed from newsletter'
  );
});

/**
 * Get all subscribers (Admin only)
 */
const getSubscribers = asyncHandler(async (req, res) => {
  const filters = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    search: req.query.search,
    isActive: req.query.isActive !== undefined ? req.query.isActive === 'true' : undefined,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await newsletterService.getSubscribers(filters);
  successResponse(res, result, 'Subscribers retrieved successfully');
});

/**
 * Get newsletter statistics (Admin only)
 */
const getNewsletterStats = asyncHandler(async (req, res) => {
  const stats = await newsletterService.getNewsletterStats();
  successResponse(res, stats, 'Newsletter statistics retrieved successfully');
});

/**
 * Export subscribers to CSV (Admin only)
 */
const exportSubscribers = asyncHandler(async (req, res) => {
  const filters = {
    search: req.query.search,
    isActive: req.query.isActive !== undefined ? req.query.isActive === 'true' : undefined
  };

  const csvData = await newsletterService.exportSubscribersToCSV(filters);
  
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename=newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
  
  res.send(csvData);
});

/**
 * Delete subscriber (Admin only)
 */
const deleteSubscriber = asyncHandler(async (req, res) => {
  await newsletterService.deleteSubscriber(req.params.id);
  successResponse(res, null, 'Subscriber deleted successfully');
});

/**
 * Toggle subscriber status (Admin only)
 */
const toggleSubscriberStatus = asyncHandler(async (req, res) => {
  const updatedSubscriber = await newsletterService.toggleSubscriberStatus(req.params.id);
  const status = updatedSubscriber.isActive ? 'activated' : 'deactivated';
  successResponse(res, updatedSubscriber, `Subscriber ${status} successfully`);
});

/**
 * Bulk import subscribers (Admin only)
 */
const bulkImportSubscribers = asyncHandler(async (req, res) => {
  const { emails } = req.body;
  
  if (!emails || !Array.isArray(emails) || emails.length === 0) {
    return errorResponse(res, 'Emails array is required and must contain at least one email', 400);
  }

  const result = await newsletterService.bulkImportSubscribers(emails);
  successResponse(res, result, `Bulk import completed. ${result.successful} subscribers added, ${result.failed} failed.`);
});

/**
 * Bulk delete subscribers (Admin only)
 */
const bulkDeleteSubscribers = asyncHandler(async (req, res) => {
  const { subscriberIds } = req.body;

  const result = await newsletterService.bulkDeleteSubscribers(subscriberIds);
  successResponse(res, result, `${result.count} subscribers deleted successfully`);
});

/**
 * Bulk activate subscribers (Admin only)
 */
const bulkActivateSubscribers = asyncHandler(async (req, res) => {
  const { subscriberIds } = req.body;

  const result = await newsletterService.bulkUpdateStatus(subscriberIds, true);
  successResponse(res, result, `${result.count} subscribers activated successfully`);
});

/**
 * Bulk deactivate subscribers (Admin only)
 */
const bulkDeactivateSubscribers = asyncHandler(async (req, res) => {
  const { subscriberIds } = req.body;

  const result = await newsletterService.bulkUpdateStatus(subscriberIds, false);
  successResponse(res, result, `${result.count} subscribers deactivated successfully`);
});

/**
 * Send newsletter (Admin only) - Future feature
 */
const sendNewsletter = asyncHandler(async (req, res) => {
  const { subject, content, recipientType = 'active' } = req.body;
  
  if (!subject || !content) {
    return errorResponse(res, 'Subject and content are required', 400);
  }

  const result = await newsletterService.sendNewsletter({
    subject,
    content,
    recipientType,
    senderId: req.admin.id
  });
  
  successResponse(res, result, `Newsletter sent to ${result.recipientCount} subscribers successfully`);
});

/**
 * Get newsletter trends (Admin only)
 */
const getNewsletterTrends = asyncHandler(async (req, res) => {
  const days = parseInt(req.query.days) || 30;
  const trends = await newsletterService.getNewsletterTrends(days);
  successResponse(res, trends, 'Newsletter trends retrieved successfully');
});

/**
 * Get subscriber by email (Admin only)
 */
const getSubscriberByEmail = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const subscriber = await newsletterService.getSubscriberByEmail(email);
  successResponse(res, subscriber, 'Subscriber retrieved successfully');
});

module.exports = {
  subscribe,
  unsubscribe,
  getSubscribers,
  getNewsletterStats,
  exportSubscribers,
  deleteSubscriber,
  toggleSubscriberStatus,
  bulkImportSubscribers,
  bulkDeleteSubscribers,
  bulkActivateSubscribers,
  bulkDeactivateSubscribers,
  sendNewsletter,
  getNewsletterTrends,
  getSubscriberByEmail
};
