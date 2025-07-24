const chatService = require('../services/chatService');
const { asyncHandler, successResponse, errorResponse } = require('../middleware/errorHandler');

/**
 * Create new chat room (Admin only)
 */
const createRoom = asyncHandler(async (req, res) => {
  const room = await chatService.createRoom(req.body);
  successResponse(res, room, 'Chat room created successfully', 201);
});

/**
 * Get all chat rooms
 */
const getRooms = asyncHandler(async (req, res) => {
  const filters = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    search: req.query.search,
    isActive: req.query.isActive !== undefined ? req.query.isActive === 'true' : undefined,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await chatService.getRooms(filters);
  successResponse(res, result, 'Chat rooms retrieved successfully');
});

/**
 * Get room by ID
 */
const getRoomById = asyncHandler(async (req, res) => {
  const room = await chatService.getRoomById(req.params.id);
  successResponse(res, room, 'Chat room retrieved successfully');
});

/**
 * Update room (Admin only)
 */
const updateRoom = asyncHandler(async (req, res) => {
  const updatedRoom = await chatService.updateRoom(req.params.id, req.body);
  successResponse(res, updatedRoom, 'Chat room updated successfully');
});

/**
 * Delete room (Admin only)
 */
const deleteRoom = asyncHandler(async (req, res) => {
  await chatService.deleteRoom(req.params.id);
  successResponse(res, null, 'Chat room deleted successfully');
});

/**
 * Get messages for a room
 */
const getMessages = asyncHandler(async (req, res) => {
  const options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 50,
    sortOrder: req.query.sortOrder || 'asc'
  };

  const result = await chatService.getMessages(req.params.roomId, options);
  successResponse(res, result, 'Messages retrieved successfully');
});

/**
 * Get recent messages for a room
 */
const getRecentMessages = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 50;
  const messages = await chatService.getRecentMessages(req.params.roomId, limit);
  successResponse(res, messages, 'Recent messages retrieved successfully');
});

/**
 * Send message (REST endpoint for non-socket clients)
 */
const sendMessage = asyncHandler(async (req, res) => {
  const messageData = {
    ...req.body,
    roomId: req.params.roomId,
    senderId: req.admin.id
  };

  const message = await chatService.sendMessage(messageData);
  successResponse(res, message, 'Message sent successfully', 201);
});

/**
 * Delete message (Admin only)
 */
const deleteMessage = asyncHandler(async (req, res) => {
  await chatService.deleteMessage(req.params.messageId, req.admin.id);
  successResponse(res, null, 'Message deleted successfully');
});

/**
 * Get message by ID
 */
const getMessageById = asyncHandler(async (req, res) => {
  const message = await chatService.getMessageById(req.params.messageId);
  successResponse(res, message, 'Message retrieved successfully');
});

/**
 * Mark messages as read
 */
const markMessagesAsRead = asyncHandler(async (req, res) => {
  await chatService.markMessagesAsRead(req.params.roomId, req.admin.id);
  successResponse(res, null, 'Messages marked as read');
});

/**
 * Get room participants
 */
const getRoomParticipants = asyncHandler(async (req, res) => {
  const participants = await chatService.getRoomParticipants(req.params.roomId);
  successResponse(res, participants, 'Room participants retrieved successfully');
});

/**
 * Get online participants
 */
const getOnlineParticipants = asyncHandler(async (req, res) => {
  const participants = await chatService.getOnlineParticipants(req.params.roomId);
  successResponse(res, participants, 'Online participants retrieved successfully');
});

/**
 * Get chat statistics (Admin only)
 */
const getChatStats = asyncHandler(async (req, res) => {
  const roomId = req.query.roomId;
  const stats = await chatService.getChatStats(roomId);
  successResponse(res, stats, 'Chat statistics retrieved successfully');
});

/**
 * Search messages
 */
const searchMessages = asyncHandler(async (req, res) => {
  const { q: query } = req.query;
  
  if (!query) {
    return errorResponse(res, 'Search query is required', 400);
  }

  const options = {
    roomId: req.query.roomId,
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 20,
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await chatService.searchMessages(query, options);
  successResponse(res, result, 'Message search results retrieved successfully');
});

/**
 * Upload file for chat
 */
const uploadFile = asyncHandler(async (req, res) => {
  if (!req.files || !req.files.file) {
    return errorResponse(res, 'No file provided', 400);
  }

  const file = req.files.file;
  
  // Validate file type (allow images and common document types)
  const allowedTypes = [
    'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf', 'text/plain', 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (!allowedTypes.includes(file.mimetype)) {
    return errorResponse(res, 'File type not allowed', 400);
  }

  // Validate file size (max 10MB)
  const maxSize = 10 * 1024 * 1024; // 10MB
  if (file.size > maxSize) {
    return errorResponse(res, 'File size too large. Maximum 10MB allowed', 400);
  }

  try {
    const fileUrl = await chatService.uploadChatFile(file, req.params.roomId);
    successResponse(res, { fileUrl }, 'File uploaded successfully');
  } catch (error) {
    console.error('Chat file upload error:', error);
    errorResponse(res, 'Failed to upload file', 500);
  }
});

/**
 * Get unread messages count for current admin
 */
const getUnreadCount = asyncHandler(async (req, res) => {
  const count = await chatService.getUnreadMessagesCount(req.admin.id);
  successResponse(res, { count }, 'Unread messages count retrieved successfully');
});

/**
 * Get chat activity (Admin only)
 */
const getChatActivity = asyncHandler(async (req, res) => {
  const days = parseInt(req.query.days) || 7;
  const activity = await chatService.getChatActivity(days);
  successResponse(res, activity, 'Chat activity retrieved successfully');
});

/**
 * Create default room if none exists
 */
const createDefaultRoom = asyncHandler(async (req, res) => {
  const room = await chatService.createDefaultRoom();
  successResponse(res, room, 'Default room created successfully');
});

/**
 * Toggle room status (Admin only)
 */
const toggleRoomStatus = asyncHandler(async (req, res) => {
  const room = await chatService.getRoomById(req.params.id);
  const newStatus = !room.isActive;
  
  const updatedRoom = await chatService.updateRoom(req.params.id, { isActive: newStatus });
  
  const message = newStatus ? 'Room activated successfully' : 'Room deactivated successfully';
  successResponse(res, updatedRoom, message);
});

/**
 * Get my chat rooms (rooms where admin is participating)
 */
const getMyChatRooms = asyncHandler(async (req, res) => {
  // This would need additional logic to get rooms where admin is participating
  // For now, returning all active rooms
  const filters = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    isActive: true,
    sortBy: req.query.sortBy || 'updatedAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await chatService.getRooms(filters);
  successResponse(res, result, 'Your chat rooms retrieved successfully');
});

module.exports = {
  createRoom,
  getRooms,
  getRoomById,
  updateRoom,
  deleteRoom,
  getMessages,
  getRecentMessages,
  sendMessage,
  deleteMessage,
  getMessageById,
  markMessagesAsRead,
  getRoomParticipants,
  getOnlineParticipants,
  getChatStats,
  searchMessages,
  uploadFile,
  getUnreadCount,
  getChatActivity,
  createDefaultRoom,
  toggleRoomStatus,
  getMyChatRooms
};