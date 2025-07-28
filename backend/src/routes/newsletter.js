const express = require('express');
const router = express.Router();

// Import controllers
const newsletterController = require('../controllers/newsletterController');

// Import middleware
const { authenticate } = require('../middleware/auth');
const { authenticateAdmin } = require('../middleware/adminAuth');
const { newsletterRateLimiter } = require('../middleware/rateLimiter');
const {
  newsletterSubscribeValidation,
  newsletterUnsubscribeValidation,
  paginationValidation,
  bulkNewsletterValidation
} = require('../middleware/validation');

// Public routes (no authentication required)
router.post('/subscribe', newsletterRateLimiter, newsletterSubscribeValidation, newsletterController.subscribe);
router.post('/unsubscribe', newsletterRateLimiter, newsletterUnsubscribeValidation, newsletterController.unsubscribe);

// Protected routes (authentication + admin required)
router.use(authenticate);
router.use(authenticateAdmin);

// Newsletter management routes
router.get('/', paginationValidation, newsletterController.getSubscribers);
router.get('/stats', newsletterController.getNewsletterStats);
router.get('/export', newsletterController.exportSubscribers);

// Individual subscriber operations
router.delete('/:id', newsletterController.deleteSubscriber);
router.patch('/:id/toggle-status', newsletterController.toggleSubscriberStatus);

// Bulk operations
router.post('/bulk/import', newsletterController.bulkImportSubscribers);
router.delete('/bulk/delete', bulkNewsletterValidation, newsletterController.bulkDeleteSubscribers);
router.patch('/bulk/activate', bulkNewsletterValidation, newsletterController.bulkActivateSubscribers);
router.patch('/bulk/deactivate', bulkNewsletterValidation, newsletterController.bulkDeactivateSubscribers);

// Newsletter sending (future feature)
router.post('/send', newsletterController.sendNewsletter);

module.exports = router;