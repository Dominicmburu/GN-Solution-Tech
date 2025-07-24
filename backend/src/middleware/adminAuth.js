const { authenticate } = require('./auth');

/**
 * Admin role authorization middleware
 * Checks if user has admin privileges
 */
const requireAdmin = (req, res, next) => {
  if (!req.admin) {
    return res.status(401).json({
      error: 'Authentication required',
      message: 'You must be authenticated to access this resource'
    });
  }

  const allowedRoles = ['ADMIN', 'SUPER_ADMIN', 'MODERATOR'];
  
  if (!allowedRoles.includes(req.admin.role)) {
    return res.status(403).json({
      error: 'Insufficient permissions',
      message: 'Admin privileges required'
    });
  }

  next();
};

/**
 * Super admin authorization middleware
 * Checks if user has super admin privileges
 */
const requireSuperAdmin = (req, res, next) => {
  if (!req.admin) {
    return res.status(401).json({
      error: 'Authentication required',
      message: 'You must be authenticated to access this resource'
    });
  }

  if (req.admin.role !== 'SUPER_ADMIN') {
    return res.status(403).json({
      error: 'Insufficient permissions',
      message: 'Super admin privileges required'
    });
  }

  next();
};

/**
 * Moderator or higher authorization middleware
 * Checks if user has moderator or higher privileges
 */
const requireModerator = (req, res, next) => {
  if (!req.admin) {
    return res.status(401).json({
      error: 'Authentication required',
      message: 'You must be authenticated to access this resource'
    });
  }

  const allowedRoles = ['MODERATOR', 'ADMIN', 'SUPER_ADMIN'];
  
  if (!allowedRoles.includes(req.admin.role)) {
    return res.status(403).json({
      error: 'Insufficient permissions',
      message: 'Moderator privileges or higher required'
    });
  }

  next();
};

/**
 * Resource owner or admin authorization middleware
 * Checks if user owns the resource or has admin privileges
 */
const requireOwnerOrAdmin = (resourceIdParam = 'id', ownerField = 'authorId') => {
  return async (req, res, next) => {
    if (!req.admin) {
      return res.status(401).json({
        error: 'Authentication required',
        message: 'You must be authenticated to access this resource'
      });
    }

    const resourceId = req.params[resourceIdParam];
    const adminId = req.admin.id;
    const adminRole = req.admin.role;

    // Super admins can access everything
    if (adminRole === 'SUPER_ADMIN') {
      return next();
    }

    // Regular admins can also access everything for now
    if (adminRole === 'ADMIN') {
      return next();
    }

    // For moderators and below, check ownership
    try {
      const { PrismaClient } = require('@prisma/client');
      const prisma = new PrismaClient();

      // This is a generic approach - customize based on your models
      let resource = null;
      
      // Try to find the resource in the blog table first
      try {
        resource = await prisma.blog.findUnique({
          where: { id: resourceId },
          select: { [ownerField]: true }
        });
      } catch (error) {
        // If blog query fails, resource might not exist or be of different type
        console.log('Resource not found in blog table, allowing access for admins');
      }

      if (resource && resource[ownerField] !== adminId) {
        return res.status(403).json({
          error: 'Access denied',
          message: 'You can only access your own resources'
        });
      }

      next();
    } catch (error) {
      console.error('Authorization error:', error);
      return res.status(500).json({
        error: 'Authorization check failed',
        message: 'Unable to verify resource ownership'
      });
    }
  };
};

/**
 * Custom role checker
 * @param {string[]} allowedRoles - Array of allowed roles
 * @returns {Function} Middleware function
 */
const requireRoles = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.admin) {
      return res.status(401).json({
        error: 'Authentication required',
        message: 'You must be authenticated to access this resource'
      });
    }

    if (!allowedRoles.includes(req.admin.role)) {
      return res.status(403).json({
        error: 'Insufficient permissions',
        message: `Required roles: ${allowedRoles.join(', ')}`
      });
    }

    next();
  };
};

/**
 * Middleware to combine authentication and admin authorization
 */
const authenticateAdmin = [authenticate, requireAdmin];

/**
 * Middleware to combine authentication and super admin authorization
 */
const authenticateSuperAdmin = [authenticate, requireSuperAdmin];

/**
 * Middleware to combine authentication and moderator authorization
 */
const authenticateModerator = [authenticate, requireModerator];

module.exports = {
  requireAdmin,
  requireSuperAdmin,
  requireModerator,
  requireOwnerOrAdmin,
  requireRoles,
  authenticateAdmin,
  authenticateSuperAdmin,
  authenticateModerator
};