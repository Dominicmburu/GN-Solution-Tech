const express = require('express');
const router = express.Router();

// Import controllers
const blogController = require('../controllers/blogController');

// Import middleware
const { authenticate, optionalAuth } = require('../middleware/auth');
const { authenticateAdmin, requireOwnerOrAdmin } = require('../middleware/adminAuth');
const { uploadRateLimiter } = require('../middleware/rateLimiter');
const {
  createBlogValidation,
  updateBlogValidation,
  idValidation,
  paginationValidation,
  fileUploadValidation
} = require('../middleware/validation');

// Public routes (no authentication required)
router.get('/public', paginationValidation, blogController.getBlogs);
router.get('/public/search', blogController.searchBlogs);
router.get('/public/tags', blogController.getAllTags);
router.get('/public/slug/:slug', blogController.getBlogBySlug);
router.get('/public/:id', idValidation, blogController.getBlogById);
router.get('/public/:id/related', idValidation, blogController.getRelatedBlogs);

// Semi-protected routes (optional authentication)
router.get('/slug/:slug', optionalAuth, blogController.getBlogBySlug);
router.get('/single/:id', optionalAuth, idValidation, blogController.getBlogById);

// Protected routes (authentication required)
router.use(authenticate);

// Admin-only routes
router.use(authenticateAdmin);

// Blog CRUD operations
router.post('/', createBlogValidation, blogController.createBlog);
router.get('/admin', paginationValidation, blogController.getBlogs);
router.put('/admin/:id', idValidation, updateBlogValidation, requireOwnerOrAdmin(), blogController.updateBlog);
router.delete('/admin/:id', idValidation, requireOwnerOrAdmin(), blogController.deleteBlog);

// Blog management routes
router.get('/my/blogs', paginationValidation, blogController.getMyBlogs);
router.get('/stats', blogController.getBlogStats);
router.get('/search', blogController.searchBlogs);
router.get('/tags', blogController.getAllTags);

// Blog actions
router.post('/admin/:id/duplicate', idValidation, requireOwnerOrAdmin(), blogController.duplicateBlog);
router.patch('/admin/:id/toggle-status', idValidation, requireOwnerOrAdmin(), blogController.toggleBlogStatus);
router.patch('/bulk/status', blogController.bulkUpdateStatus);

// Author-specific routes
router.get('/author/:authorId', idValidation, paginationValidation, blogController.getBlogsByAuthor);

// Related blogs
router.get('/admin/:id/related', idValidation, blogController.getRelatedBlogs);

// File upload routes
router.post('/admin/:id/featured-image',
  idValidation,
  uploadRateLimiter,
  fileUploadValidation(['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'], 5 * 1024 * 1024),
  requireOwnerOrAdmin(),
  blogController.uploadFeaturedImage
);

module.exports = router;

