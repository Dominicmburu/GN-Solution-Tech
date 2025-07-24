const blogService = require('../services/blogService');
const { asyncHandler, successResponse, errorResponse } = require('../middleware/errorHandler');

/**
 * Create new blog post
 */
const createBlog = asyncHandler(async (req, res) => {
  const blog = await blogService.createBlog(req.body, req.admin.id);
  successResponse(res, blog, 'Blog created successfully', 201);
});

/**
 * Get all blogs with filtering and pagination
 */
const getBlogs = asyncHandler(async (req, res) => {
  const filters = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    search: req.query.search,
    status: req.query.status,
    authorId: req.query.authorId,
    tags: req.query.tags ? req.query.tags.split(',') : undefined,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc',
    published: req.query.published === 'true'
  };

  const result = await blogService.getBlogs(filters);
  successResponse(res, result, 'Blogs retrieved successfully');
});

/**
 * Get blog by ID
 */
const getBlogById = asyncHandler(async (req, res) => {
  const incrementViews = req.query.incrementViews === 'true';
  const blog = await blogService.getBlogById(req.params.id, incrementViews);
  successResponse(res, blog, 'Blog retrieved successfully');
});

/**
 * Get blog by slug
 */
const getBlogBySlug = asyncHandler(async (req, res) => {
  const incrementViews = req.query.incrementViews === 'true';
  const blog = await blogService.getBlogBySlug(req.params.slug, incrementViews);
  successResponse(res, blog, 'Blog retrieved successfully');
});

/**
 * Update blog
 */
const updateBlog = asyncHandler(async (req, res) => {
  const updatedBlog = await blogService.updateBlog(req.params.id, req.body, req.admin.id);
  successResponse(res, updatedBlog, 'Blog updated successfully');
});

/**
 * Delete blog
 */
const deleteBlog = asyncHandler(async (req, res) => {
  await blogService.deleteBlog(req.params.id);
  successResponse(res, null, 'Blog deleted successfully');
});

/**
 * Get blog statistics
 */
const getBlogStats = asyncHandler(async (req, res) => {
  // Super admins can see all stats, others only their own
  const authorId = req.admin.role === 'SUPER_ADMIN' ? req.query.authorId : req.admin.id;
  const stats = await blogService.getBlogStats(authorId);
  successResponse(res, stats, 'Blog statistics retrieved successfully');
});

/**
 * Get all unique tags
 */
const getAllTags = asyncHandler(async (req, res) => {
  const tags = await blogService.getAllTags();
  successResponse(res, tags, 'Tags retrieved successfully');
});

/**
 * Search blogs
 */
const searchBlogs = asyncHandler(async (req, res) => {
  const { q: query } = req.query;
  
  if (!query) {
    return errorResponse(res, 'Search query is required', 400);
  }

  const options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    status: req.query.status || 'PUBLISHED'
  };

  const result = await blogService.searchBlogs(query, options);
  successResponse(res, result, 'Search results retrieved successfully');
});

/**
 * Get related blogs
 */
const getRelatedBlogs = asyncHandler(async (req, res) => {
  const limit = parseInt(req.query.limit) || 5;
  const relatedBlogs = await blogService.getRelatedBlogs(req.params.id, limit);
  successResponse(res, relatedBlogs, 'Related blogs retrieved successfully');
});

/**
 * Bulk update blog status
 */
const bulkUpdateStatus = asyncHandler(async (req, res) => {
  const { blogIds, status } = req.body;

  if (!blogIds || !Array.isArray(blogIds) || blogIds.length === 0) {
    return errorResponse(res, 'Blog IDs array is required', 400);
  }

  if (!status || !['DRAFT', 'PUBLISHED', 'ARCHIVED'].includes(status)) {
    return errorResponse(res, 'Valid status is required', 400);
  }

  const result = await blogService.bulkUpdateStatus(blogIds, status);
  successResponse(res, result, `${result.count} blogs updated successfully`);
});

/**
 * Get blogs by author
 */
const getBlogsByAuthor = asyncHandler(async (req, res) => {
  const options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    status: req.query.status,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await blogService.getBlogsByAuthor(req.params.authorId, options);
  successResponse(res, result, 'Author blogs retrieved successfully');
});

/**
 * Upload featured image
 */
const uploadFeaturedImage = asyncHandler(async (req, res) => {
  if (!req.files || !req.files.image) {
    return errorResponse(res, 'No image file provided', 400);
  }

  const image = req.files.image;
  
  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(image.mimetype)) {
    return errorResponse(res, 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed', 400);
  }

  // Validate file size (max 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (image.size > maxSize) {
    return errorResponse(res, 'File size too large. Maximum 5MB allowed', 400);
  }

  try {
    const imageUrl = await blogService.uploadFeaturedImage(image, req.params.id);
    successResponse(res, { imageUrl }, 'Featured image uploaded successfully');
  } catch (error) {
    console.error('Featured image upload error:', error);
    errorResponse(res, 'Failed to upload featured image', 500);
  }
});

/**
 * Get my blogs (current admin's blogs)
 */
const getMyBlogs = asyncHandler(async (req, res) => {
  const options = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    status: req.query.status,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await blogService.getBlogsByAuthor(req.admin.id, options);
  successResponse(res, result, 'Your blogs retrieved successfully');
});

/**
 * Duplicate blog
 */
const duplicateBlog = asyncHandler(async (req, res) => {
  const originalBlog = await blogService.getBlogById(req.params.id);
  
  const duplicateData = {
    title: `Copy of ${originalBlog.title}`,
    content: originalBlog.content,
    excerpt: originalBlog.excerpt,
    featuredImage: originalBlog.featuredImage,
    tags: originalBlog.tags,
    metaTitle: originalBlog.metaTitle,
    metaDescription: originalBlog.metaDescription,
    status: 'DRAFT' // Always create as draft
  };

  const duplicatedBlog = await blogService.createBlog(duplicateData, req.admin.id);
  successResponse(res, duplicatedBlog, 'Blog duplicated successfully', 201);
});

/**
 * Toggle blog status (publish/unpublish)
 */
const toggleBlogStatus = asyncHandler(async (req, res) => {
  const blog = await blogService.getBlogById(req.params.id);
  
  const newStatus = blog.status === 'PUBLISHED' ? 'DRAFT' : 'PUBLISHED';
  const updatedBlog = await blogService.updateBlog(req.params.id, { status: newStatus }, req.admin.id);
  
  const message = newStatus === 'PUBLISHED' ? 'Blog published successfully' : 'Blog unpublished successfully';
  successResponse(res, updatedBlog, message);
});

module.exports = {
  createBlog,
  getBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  getBlogStats,
  getAllTags,
  searchBlogs,
  getRelatedBlogs,
  bulkUpdateStatus,
  getBlogsByAuthor,
  uploadFeaturedImage,
  getMyBlogs,
  duplicateBlog,
  toggleBlogStatus
};