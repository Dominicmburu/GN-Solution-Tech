const express = require('express');
const router = express.Router();

// Import controllers
const contactController = require('../controllers/contactController');

// Import middleware
const { authenticate } = require('../middleware/auth');
const { authenticateAdmin } = require('../middleware/adminAuth');
const { contactRateLimiter } = require('../middleware/rateLimiter');
const {
  contactValidation,
  idValidation,
  paginationValidation
} = require('../middleware/validation');

// Public routes (no authentication required)
router.post('/', contactRateLimiter, contactValidation, contactController.createContact);

// Protected routes (authentication + admin required)
router.use(authenticate);
router.use(authenticateAdmin);

// Contact management routes
router.get('/', paginationValidation, contactController.getContacts);
router.get('/stats', contactController.getContactStats);
router.get('/trends', contactController.getContactTrends);
router.get('/unread-count', contactController.getUnreadCount);
router.get('/export', contactController.exportContacts);

// Individual contact routes
router.get('/:id', idValidation, contactController.getContactById);
router.patch('/:id/status', idValidation, contactController.updateContactStatus);
router.post('/:id/reply', idValidation, contactController.replyToContact);
router.delete('/:id', idValidation, contactController.deleteContact);

// Bulk operations
router.patch('/bulk/status', contactController.bulkUpdateStatus);
router.patch('/bulk/read', contactController.markAsRead);
router.patch('/bulk/unread', contactController.markAsUnread);
router.delete('/bulk/delete', contactController.bulkDeleteContacts);

module.exports = router;