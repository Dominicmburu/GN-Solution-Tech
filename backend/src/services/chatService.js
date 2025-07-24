const { PrismaClient } = require('@prisma/client');
const { AppError } = require('../middleware/errorHandler');

const prisma = new PrismaClient();

class ChatService {
  /**
   * Create a new chat room
   * @param {Object} roomData - Room data
   * @returns {Object} Created room
   */
  async createRoom(roomData) {
    const { name, description } = roomData;

    const room = await prisma.chatRoom.create({
      data: {
        name,
        description,
        isActive: true
      }
    });

    return room;
  }

  /**
   * Get all chat rooms
   * @param {Object} filters - Filter options
   * @returns {Object} Paginated rooms list
   */
  async getRooms(filters = {}) {
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
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (typeof isActive === 'boolean') {
      where.isActive = isActive;
    }

    const [rooms, total] = await Promise.all([
      prisma.chatRoom.findMany({
        where,
        include: {
          _count: {
            select: {
              messages: true,
              participants: true
            }
          }
        },
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limit
      }),
      prisma.chatRoom.count({ where })
    ]);

    return {
      rooms,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Get room by ID
   * @param {string} roomId - Room ID
   * @returns {Object} Room data
   */
  async getRoomById(roomId) {
    const room = await prisma.chatRoom.findUnique({
      where: { id: roomId },
      include: {
        _count: {
          select: {
            messages: true,
            participants: true
          }
        }
      }
    });

    if (!room) {
      throw new AppError('Chat room not found', 404);
    }

    return room;
  }

  /**
   * Update room
   * @param {string} roomId - Room ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated room
   */
  async updateRoom(roomId, updateData) {
    const { name, description, isActive } = updateData;

    const room = await prisma.chatRoom.findUnique({
      where: { id: roomId }
    });

    if (!room) {
      throw new AppError('Chat room not found', 404);
    }

    const updatedRoom = await prisma.chatRoom.update({
      where: { id: roomId },
      data: {
        ...(name && { name }),
        ...(description !== undefined && { description }),
        ...(typeof isActive === 'boolean' && { isActive })
      }
    });

    return updatedRoom;
  }

  /**
   * Delete room
   * @param {string} roomId - Room ID
   */
  async deleteRoom(roomId) {
    const room = await prisma.chatRoom.findUnique({
      where: { id: roomId }
    });

    if (!room) {
      throw new AppError('Chat room not found', 404);
    }

    await prisma.chatRoom.delete({
      where: { id: roomId }
    });
  }

  /**
   * Send message
   * @param {Object} messageData - Message data
   * @returns {Object} Created message
   */
  async sendMessage(messageData) {
    const {
      content,
      roomId,
      senderId = null, // Admin ID
      guestName = null,
      guestEmail = null,
      messageType = 'TEXT',
      fileUrl = null
    } = messageData;

    // Verify room exists and is active
    const room = await prisma.chatRoom.findUnique({
      where: { id: roomId }
    });

    if (!room) {
      throw new AppError('Chat room not found', 404);
    }

    if (!room.isActive) {
      throw new AppError('Chat room is not active', 400);
    }

    const message = await prisma.chatMessage.create({
      data: {
        content,
        roomId,
        senderId,
        guestName,
        guestEmail,
        messageType,
        fileUrl
      },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      }
    });

    return message;
  }

  /**
   * Get messages for a room
   * @param {string} roomId - Room ID
   * @param {Object} options - Query options
   * @returns {Object} Paginated messages
   */
  async getMessages(roomId, options = {}) {
    const {
      page = 1,
      limit = 50,
      sortOrder = 'asc'
    } = options;

    const skip = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      prisma.chatMessage.findMany({
        where: { roomId },
        include: {
          sender: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
              avatar: true
            }
          }
        },
        orderBy: { createdAt: sortOrder },
        skip,
        take: limit
      }),
      prisma.chatMessage.count({ where: { roomId } })
    ]);

    return {
      messages,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Get recent messages for a room
   * @param {string} roomId - Room ID
   * @param {number} limit - Number of messages
   * @returns {Array} Recent messages
   */
  async getRecentMessages(roomId, limit = 50) {
    const messages = await prisma.chatMessage.findMany({
      where: { roomId },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    });

    return messages.reverse(); // Return in ascending order
  }

  /**
   * Mark messages as read
   * @param {string} roomId - Room ID
   * @param {string} participantId - Participant ID (optional)
   */
  async markMessagesAsRead(roomId, participantId = null) {
    const where = { roomId };
    
    // If participant is specified, only mark messages not sent by them
    if (participantId) {
      where.senderId = { not: participantId };
    }

    await prisma.chatMessage.updateMany({
      where,
      data: { isRead: true }
    });
  }

  /**
   * Add participant to room
   * @param {Object} participantData - Participant data
   * @returns {Object} Created participant
   */
  async addParticipant(participantData) {
    const {
      roomId,
      adminId = null,
      guestName = null,
      guestEmail = null,
      socketId = null
    } = participantData;

    // Check if participant already exists
    const existingParticipant = await prisma.chatParticipant.findFirst({
      where: {
        roomId,
        ...(adminId ? { adminId } : { guestEmail })
      }
    });

    if (existingParticipant) {
      // Update existing participant
      return await prisma.chatParticipant.update({
        where: { id: existingParticipant.id },
        data: {
          socketId,
          isOnline: true,
          lastSeenAt: new Date()
        },
        include: {
          admin: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
              avatar: true
            }
          }
        }
      });
    }

    // Create new participant
    const participant = await prisma.chatParticipant.create({
      data: {
        roomId,
        adminId,
        guestName,
        guestEmail,
        socketId,
        isOnline: true,
        lastSeenAt: new Date()
      },
      include: {
        admin: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      }
    });

    return participant;
  }

  /**
   * Remove participant from room
   * @param {string} roomId - Room ID
   * @param {string} participantId - Participant ID or socket ID
   */
  async removeParticipant(roomId, participantId) {
    await prisma.chatParticipant.updateMany({
      where: {
        roomId,
        OR: [
          { id: participantId },
          { socketId: participantId }
        ]
      },
      data: {
        isOnline: false,
        lastSeenAt: new Date(),
        socketId: null
      }
    });
  }

  /**
   * Get room participants
   * @param {string} roomId - Room ID
   * @returns {Array} Room participants
   */
  async getRoomParticipants(roomId) {
    const participants = await prisma.chatParticipant.findMany({
      where: { roomId },
      include: {
        admin: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      },
      orderBy: { lastSeenAt: 'desc' }
    });

    return participants;
  }

  /**
   * Get online participants for a room
   * @param {string} roomId - Room ID
   * @returns {Array} Online participants
   */
  async getOnlineParticipants(roomId) {
    const participants = await prisma.chatParticipant.findMany({
      where: {
        roomId,
        isOnline: true
      },
      include: {
        admin: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      }
    });

    return participants;
  }

  /**
   * Update participant status
   * @param {string} socketId - Socket ID
   * @param {boolean} isOnline - Online status
   */
  async updateParticipantStatus(socketId, isOnline) {
    await prisma.chatParticipant.updateMany({
      where: { socketId },
      data: {
        isOnline,
        lastSeenAt: new Date(),
        ...(isOnline ? {} : { socketId: null })
      }
    });
  }

  /**
   * Get chat statistics
   * @param {string} roomId - Optional room ID to filter stats
   * @returns {Object} Chat statistics
   */
  async getChatStats(roomId = null) {
    const where = roomId ? { roomId } : {};

    const [
      totalMessages,
      totalRooms,
      activeRooms,
      totalParticipants,
      onlineParticipants,
      recentMessages
    ] = await Promise.all([
      prisma.chatMessage.count({ where }),
      roomId ? 1 : prisma.chatRoom.count(),
      roomId ? (await prisma.chatRoom.findUnique({ where: { id: roomId } }))?.isActive ? 1 : 0 : prisma.chatRoom.count({ where: { isActive: true } }),
      prisma.chatParticipant.count({ where }),
      prisma.chatParticipant.count({ where: { ...where, isOnline: true } }),
      prisma.chatMessage.findMany({
        where,
        include: {
          sender: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
              avatar: true
            }
          }
        },
        orderBy: { createdAt: 'desc' },
        take: 5
      })
    ]);

    return {
      totalMessages,
      totalRooms,
      activeRooms,
      totalParticipants,
      onlineParticipants,
      recentMessages
    };
  }

  /**
   * Search messages
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @returns {Object} Search results
   */
  async searchMessages(query, options = {}) {
    const {
      roomId,
      page = 1,
      limit = 20,
      sortOrder = 'desc'
    } = options;

    const skip = (page - 1) * limit;
    const where = {
      content: { contains: query, mode: 'insensitive' }
    };

    if (roomId) {
      where.roomId = roomId;
    }

    const [messages, total] = await Promise.all([
      prisma.chatMessage.findMany({
        where,
        include: {
          sender: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
              avatar: true
            }
          },
          room: {
            select: {
              id: true,
              name: true
            }
          }
        },
        orderBy: { createdAt: sortOrder },
        skip,
        take: limit
      }),
      prisma.chatMessage.count({ where })
    ]);

    return {
      messages,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Delete message
   * @param {string} messageId - Message ID
   * @param {string} adminId - Admin ID (for authorization)
   */
  async deleteMessage(messageId, adminId) {
    const message = await prisma.chatMessage.findUnique({
      where: { id: messageId }
    });

    if (!message) {
      throw new AppError('Message not found', 404);
    }

    // Only the sender or admin can delete the message
    if (message.senderId !== adminId) {
      // Check if user is admin/super admin
      const admin = await prisma.admin.findUnique({
        where: { id: adminId }
      });

      if (!admin || !['ADMIN', 'SUPER_ADMIN'].includes(admin.role)) {
        throw new AppError('Unauthorized to delete this message', 403);
      }
    }

    await prisma.chatMessage.delete({
      where: { id: messageId }
    });
  }

  /**
   * Get message by ID
   * @param {string} messageId - Message ID
   * @returns {Object} Message data
   */
  async getMessageById(messageId) {
    const message = await prisma.chatMessage.findUnique({
      where: { id: messageId },
      include: {
        sender: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        },
        room: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    if (!message) {
      throw new AppError('Message not found', 404);
    }

    return message;
  }

  /**
   * Upload file for chat
   * @param {Object} file - File object
   * @param {string} roomId - Room ID
   * @returns {string} File URL
   */
  async uploadChatFile(file, roomId) {
    const fileExtension = file.name.split('.').pop();
    const fileName = `chat_${roomId}_${Date.now()}.${fileExtension}`;
    const filePath = `${process.env.UPLOAD_PATH || './public/uploads'}/chat/${fileName}`;

    try {
      await file.mv(filePath);
      return `/uploads/chat/${fileName}`;
    } catch (error) {
      throw new AppError('Failed to upload file', 500);
    }
  }

  /**
   * Get unread messages count for admin
   * @param {string} adminId - Admin ID
   * @returns {number} Unread messages count
   */
  async getUnreadMessagesCount(adminId) {
    const count = await prisma.chatMessage.count({
      where: {
        isRead: false,
        senderId: { not: adminId } // Don't count own messages
      }
    });

    return count;
  }

  /**
   * Get chat activity for dashboard
   * @param {number} days - Number of days to look back
   * @returns {Array} Chat activity data
   */
  async getChatActivity(days = 7) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const messages = await prisma.chatMessage.findMany({
      where: {
        createdAt: {
          gte: startDate
        }
      },
      select: {
        createdAt: true,
        messageType: true
      }
    });

    // Group by date
    const activity = {};
    messages.forEach(message => {
      const date = message.createdAt.toISOString().split('T')[0];
      if (!activity[date]) {
        activity[date] = {
          date,
          total: 0,
          text: 0,
          image: 0,
          file: 0,
          system: 0
        };
      }
      activity[date].total++;
      activity[date][message.messageType.toLowerCase()]++;
    });

    return Object.values(activity).sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  /**
   * Create default general room if none exists
   */
  async createDefaultRoom() {
    const existingRoom = await prisma.chatRoom.findFirst();
    
    if (!existingRoom) {
      return await this.createRoom({
        name: 'General',
        description: 'General chat room for all conversations'
      });
    }

    return existingRoom;
  }
}

module.exports = new ChatService();