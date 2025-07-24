const express = require('express');
const router = express.Router();

// Import controllers
const chatController = require('../controllers/chatController');

// Import middleware
const { authenticate, optionalAuth } = require('../middleware/auth');
const { authenticateAdmin } = require('../middleware/adminAuth');
const { chatRateLimiter, uploadRateLimiter } = require('../middleware/rateLimiter');
const {
  chatMessageValidation,
  idValidation,
  paginationValidation,
  fileUploadValidation
} = require('../middleware/validation');

// Public routes (optional authentication for guests)
router.get('/rooms/public', optionalAuth, paginationValidation, chatController.getRooms);
router.get('/rooms/:id/public', optionalAuth, idValidation, chatController.getRoomById);

// Protected routes (authentication required)
router.use(authenticate);

// Chat room management (Admin only)
router.post('/rooms', authenticateAdmin, chatController.createRoom);
router.put('/rooms/:id', authenticateAdmin, idValidation, chatController.updateRoom);
router.delete('/rooms/:id', authenticateAdmin, idValidation, chatController.deleteRoom);
router.patch('/rooms/:id/toggle-status', authenticateAdmin, idValidation, chatController.toggleRoomStatus);

// General chat routes
router.get('/rooms', paginationValidation, chatController.getRooms);
router.get('/rooms/my', paginationValidation, chatController.getMyChatRooms);
router.get('/rooms/:id', idValidation, chatController.getRoomById);

// Message routes
router.get('/rooms/:roomId/messages', idValidation, paginationValidation, chatController.getMessages);
router.get('/rooms/:roomId/messages/recent', idValidation, chatController.getRecentMessages);
router.post('/rooms/:roomId/messages', idValidation, chatRateLimiter, chatMessageValidation, chatController.sendMessage);
router.patch('/rooms/:roomId/messages/read', idValidation, chatController.markMessagesAsRead);

// Individual message routes
router.get('/messages/:messageId', idValidation, chatController.getMessageById);
router.delete('/messages/:messageId', authenticateAdmin, idValidation, chatController.deleteMessage);

// Participant routes
router.get('/rooms/:roomId/participants', idValidation, chatController.getRoomParticipants);
router.get('/rooms/:roomId/participants/online', idValidation, chatController.getOnlineParticipants);

// Search and statistics
router.get('/search', chatController.searchMessages);
router.get('/stats', authenticateAdmin, chatController.getChatStats);
router.get('/activity', authenticateAdmin, chatController.getChatActivity);
router.get('/unread-count', chatController.getUnreadCount);

// File upload
router.post('/rooms/:roomId/upload',
  idValidation,
  uploadRateLimiter,
  fileUploadValidation([
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf', 'text/plain', 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ], 10 * 1024 * 1024), // 10MB
  chatController.uploadFile
);

// Utility routes
router.post('/rooms/create-default', authenticateAdmin, chatController.createDefaultRoom);

module.exports = router;