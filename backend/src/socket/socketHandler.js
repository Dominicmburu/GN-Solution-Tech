const chatSocket = require('./chatSocket');
const { verifyAccessToken } = require('../utils/jwt');
const authService = require('../services/authService');

/**
 * Setup Socket.IO handlers
 * @param {Object} io - Socket.IO server instance
 */
const setupSocketHandlers = (io) => {
  // Authentication middleware for socket connections
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token || socket.handshake.headers.authorization?.replace('Bearer ', '');
      
      if (token) {
        // Admin authentication
        try {
          const decoded = verifyAccessToken(token);
          const admin = await authService.getAdminById(decoded.adminId);
          socket.admin = admin;
          socket.isAdmin = true;
        } catch (error) {
          console.log('Invalid admin token, treating as guest');
        }
      }

      // If not authenticated as admin, treat as guest
      if (!socket.admin) {
        socket.isAdmin = false;
        socket.guestData = {
          name: socket.handshake.auth.guestName || 'Anonymous',
          email: socket.handshake.auth.guestEmail || null
        };
      }

      next();
    } catch (error) {
      console.error('Socket authentication error:', error);
      next(error);
    }
  });

  // Handle new connections
  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);
    
    if (socket.isAdmin) {
      console.log(`Admin connected: ${socket.admin.username} (${socket.admin.email})`);
    } else {
      console.log(`Guest connected: ${socket.guestData.name}`);
    }

    // Setup chat handlers
    chatSocket.setupChatHandlers(io, socket);

    // Handle disconnection
    socket.on('disconnect', (reason) => {
      console.log(`User disconnected: ${socket.id}, reason: ${reason}`);
      
      // Handle chat disconnection
      chatSocket.handleDisconnect(io, socket);
    });

    // Handle connection errors
    socket.on('error', (error) => {
      console.error(`Socket error for ${socket.id}:`, error);
    });
  });

  console.log('Socket.IO handlers setup complete');
};

module.exports = {
  setupSocketHandlers
};