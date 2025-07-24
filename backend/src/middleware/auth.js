const { verifyAccessToken } = require('../utils/jwt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/**
 * Authenticate user middleware
 * Verifies JWT token and attaches user to request
 */
const authenticate = async (req, res, next) => {
  try {
    let token;

    // Check for token in Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }
    
    // Check for token in cookies as fallback
    if (!token && req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }

    if (!token) {
      return res.status(401).json({
        error: 'Authentication required',
        message: 'Access token not provided'
      });
    }

    // Verify token
    const decoded = verifyAccessToken(token);
    
    // Get user from database
    const admin = await prisma.admin.findUnique({
      where: { id: decoded.adminId },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        avatar: true
      }
    });

    if (!admin) {
      return res.status(401).json({
        error: 'Authentication failed',
        message: 'Admin not found'
      });
    }

    if (!admin.isActive) {
      return res.status(401).json({
        error: 'Account disabled',
        message: 'Your account has been deactivated'
      });
    }

    // Attach admin to request
    req.admin = admin;
    req.token = token;
    
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Token expired',
        message: 'Access token has expired'
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        error: 'Invalid token',
        message: 'Access token is invalid'
      });
    }

    return res.status(401).json({
      error: 'Authentication failed',
      message: 'Invalid or expired token'
    });
  }
};

/**
 * Optional authentication middleware
 * Attaches user to request if token is valid, but doesn't fail if no token
 */
const optionalAuth = async (req, res, next) => {
  try {
    let token;

    // Check for token in Authorization header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }
    
    // Check for token in cookies as fallback
    if (!token && req.cookies.accessToken) {
      token = req.cookies.accessToken;
    }

    if (!token) {
      return next(); // No token, continue without authentication
    }

    // Verify token
    const decoded = verifyAccessToken(token);
    
    // Get user from database
    const admin = await prisma.admin.findUnique({
      where: { id: decoded.adminId },
      select: {
        id: true,
        email: true,
        username: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        avatar: true
      }
    });

    if (admin && admin.isActive) {
      req.admin = admin;
      req.token = token;
    }
    
    next();
  } catch (error) {
    // On error, continue without authentication
    next();
  }
};

/**
 * Check if user is authenticated
 * @param {Object} req - Request object
 * @returns {boolean} True if authenticated
 */
const isAuthenticated = (req) => {
  return req.admin && req.admin.id;
};

/**
 * Get current admin from request
 * @param {Object} req - Request object
 * @returns {Object|null} Admin object or null
 */
const getCurrentAdmin = (req) => {
  return req.admin || null;
};

module.exports = {
  authenticate,
  optionalAuth,
  isAuthenticated,
  getCurrentAdmin
};