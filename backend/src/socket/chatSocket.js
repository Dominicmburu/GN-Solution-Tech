const chatService = require('../services/chatService');
const emailService = require('../services/emailService');

/**
 * Setup chat-specific socket handlers
 * @param {Object} io - Socket.IO server instance
 * @param {Object} socket - Individual socket connection
 */
const setupChatHandlers = (io, socket) => {
  // Join a chat room
  socket.on('join_room', async (data) => {
    try {
      const { roomId } = data;
      
      if (!roomId) {
        socket.emit('error', { message: 'Room ID is required' });
        return;
      }

      // Verify room exists
      const room = await chatService.getRoomById(roomId);
      
      if (!room.isActive) {
        socket.emit('error', { message: 'Chat room is not active' });
        return;
      }

      // Join the socket room
      socket.join(roomId);
      socket.currentRoom = roomId;

      // Add participant to database
      const participantData = {
        roomId,
        socketId: socket.id,
        ...(socket.isAdmin ? 
          { adminId: socket.admin.id } : 
          { guestName: socket.guestData.name, guestEmail: socket.guestData.email }
        )
      };

      const participant = await chatService.addParticipant(participantData);

      // Get recent messages
      const recentMessages = await chatService.getRecentMessages(roomId, 50);

      // Send room data to the user
      socket.emit('room_joined', {
        room,
        participant,
        messages: recentMessages
      });

      // Get online participants
      const onlineParticipants = await chatService.getOnlineParticipants(roomId);

      // Notify other users in the room about new participant
      socket.to(roomId).emit('user_joined', {
        participant,
        onlineCount: onlineParticipants.length
      });

      // Send updated participant list to everyone in the room
      io.to(roomId).emit('participants_updated', onlineParticipants);

      console.log(`${socket.isAdmin ? 'Admin' : 'Guest'} joined room ${roomId}`);
    } catch (error) {
      console.error('Error joining room:', error);
      socket.emit('error', { message: 'Failed to join room' });
    }
  });

  // Leave a chat room
  socket.on('leave_room', async (data) => {
    try {
      const { roomId } = data;
      
      if (!roomId) {
        socket.emit('error', { message: 'Room ID is required' });
        return;
      }

      await handleLeaveRoom(io, socket, roomId);
    } catch (error) {
      console.error('Error leaving room:', error);
      socket.emit('error', { message: 'Failed to leave room' });
    }
  });

  // Send a message
  socket.on('send_message', async (data) => {
    try {
      const { content, roomId, messageType = 'TEXT', fileUrl = null } = data;

      if (!content || !roomId) {
        socket.emit('error', { message: 'Content and room ID are required' });
        return;
      }

      if (!socket.currentRoom || socket.currentRoom !== roomId) {
        socket.emit('error', { message: 'You must join the room first' });
        return;
      }

      // Create message
      const messageData = {
        content,
        roomId,
        messageType,
        fileUrl,
        ...(socket.isAdmin ? 
          { senderId: socket.admin.id } : 
          { guestName: socket.guestData.name, guestEmail: socket.guestData.email }
        )
      };

      const message = await chatService.sendMessage(messageData);

      // Emit message to all users in the room
      io.to(roomId).emit('new_message', message);

      // Send email notification to admins if message is from guest
      if (!socket.isAdmin) {
        try {
          // Get all admin emails (you might want to add a setting for this)
          const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;
          if (adminEmail) {
            await emailService.sendChatNotification(adminEmail, message);
          }
        } catch (emailError) {
          console.error('Failed to send email notification:', emailError);
        }
      }

      console.log(`Message sent in room ${roomId} by ${socket.isAdmin ? 'admin' : 'guest'}`);
    } catch (error) {
      console.error('Error sending message:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  // Typing indicator
  socket.on('typing_start', (data) => {
    const { roomId } = data;
    if (roomId && socket.currentRoom === roomId) {
      socket.to(roomId).emit('user_typing', {
        userId: socket.isAdmin ? socket.admin.id : socket.id,
        userName: socket.isAdmin ? socket.admin.username : socket.guestData.name,
        isAdmin: socket.isAdmin
      });
    }
  });

  socket.on('typing_stop', (data) => {
    const { roomId } = data;
    if (roomId && socket.currentRoom === roomId) {
      socket.to(roomId).emit('user_stopped_typing', {
        userId: socket.isAdmin ? socket.admin.id : socket.id
      });
    }
  });

  // Mark messages as read
  socket.on('mark_messages_read', async (data) => {
    try {
      const { roomId } = data;
      
      if (!roomId || socket.currentRoom !== roomId) {
        socket.emit('error', { message: 'Invalid room' });
        return;
      }

      const participantId = socket.isAdmin ? socket.admin.id : null;
      await chatService.markMessagesAsRead(roomId, participantId);

      // Notify other participants that messages were read
      socket.to(roomId).emit('messages_read', {
        userId: socket.isAdmin ? socket.admin.id : socket.id,
        userName: socket.isAdmin ? socket.admin.username : socket.guestData.name
      });
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  });

  // Get online participants
  socket.on('get_participants', async (data) => {
    try {
      const { roomId } = data;
      
      if (!roomId) {
        socket.emit('error', { message: 'Room ID is required' });
        return;
      }

      const participants = await chatService.getOnlineParticipants(roomId);
      socket.emit('participants_list', participants);
    } catch (error) {
      console.error('Error getting participants:', error);
      socket.emit('error', { message: 'Failed to get participants' });
    }
  });

  // Admin-only: Delete message
  socket.on('delete_message', async (data) => {
    if (!socket.isAdmin) {
      socket.emit('error', { message: 'Unauthorized' });
      return;
    }

    try {
      const { messageId, roomId } = data;
      
      await chatService.deleteMessage(messageId, socket.admin.id);

      // Notify all users in the room that message was deleted
      io.to(roomId).emit('message_deleted', { messageId });

      console.log(`Message ${messageId} deleted by admin ${socket.admin.username}`);
    } catch (error) {
      console.error('Error deleting message:', error);
      socket.emit('error', { message: 'Failed to delete message' });
    }
  });

  // Admin-only: Kick user from room
  socket.on('kick_user', async (data) => {
    if (!socket.isAdmin) {
      socket.emit('error', { message: 'Unauthorized' });
      return;
    }

    try {
      const { userId, roomId } = data;
      
      // Find the socket of the user to kick
      const socketsInRoom = await io.in(roomId).fetchSockets();
      const userSocket = socketsInRoom.find(s => 
        (s.isAdmin && s.admin.id === userId) || 
        (!s.isAdmin && s.id === userId)
      );

      if (userSocket) {
        // Remove participant from database
        await chatService.removeParticipant(roomId, userId);
        
        // Force disconnect the user from the room
        userSocket.leave(roomId);
        userSocket.emit('kicked_from_room', { roomId, reason: 'Kicked by admin' });
        
        // Notify other users
        socket.to(roomId).emit('user_kicked', { userId });

        console.log(`User ${userId} kicked from room ${roomId} by admin ${socket.admin.username}`);
      }
    } catch (error) {
      console.error('Error kicking user:', error);
      socket.emit('error', { message: 'Failed to kick user' });
    }
  });

  // Admin-only: Get room statistics
  socket.on('get_room_stats', async (data) => {
    if (!socket.isAdmin) {
      socket.emit('error', { message: 'Unauthorized' });
      return;
    }

    try {
      const { roomId } = data;
      const stats = await chatService.getChatStats(roomId);
      socket.emit('room_stats', stats);
    } catch (error) {
      console.error('Error getting room stats:', error);
      socket.emit('error', { message: 'Failed to get room statistics' });
    }
  });
};

/**
 * Handle user leaving a room
 * @param {Object} io - Socket.IO server instance
 * @param {Object} socket - Socket connection
 * @param {string} roomId - Room ID
 */
const handleLeaveRoom = async (io, socket, roomId) => {
  // Leave the socket room
  socket.leave(roomId);
  
  // Update participant status in database
  await chatService.removeParticipant(roomId, socket.id);

  // Get updated online participants
  const onlineParticipants = await chatService.getOnlineParticipants(roomId);

  // Notify other users in the room
  socket.to(roomId).emit('user_left', {
    userId: socket.isAdmin ? socket.admin.id : socket.id,
    userName: socket.isAdmin ? socket.admin.username : socket.guestData.name,
    onlineCount: onlineParticipants.length
  });

  // Send updated participant list
  io.to(roomId).emit('participants_updated', onlineParticipants);

  // Clear current room
  socket.currentRoom = null;

  console.log(`${socket.isAdmin ? 'Admin' : 'Guest'} left room ${roomId}`);
};

/**
 * Handle socket disconnection
 * @param {Object} io - Socket.IO server instance
 * @param {Object} socket - Socket connection
 */
const handleDisconnect = async (io, socket) => {
  try {
    // Update participant status in all rooms
    await chatService.updateParticipantStatus(socket.id, false);

    // If user was in a room, handle leaving
    if (socket.currentRoom) {
      await handleLeaveRoom(io, socket, socket.currentRoom);
    }
  } catch (error) {
    console.error('Error handling disconnect:', error);
  }
};

module.exports = {
  setupChatHandlers,
  handleDisconnect,
  handleLeaveRoom
};