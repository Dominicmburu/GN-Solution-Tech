const { PrismaClient } = require('@prisma/client');
const { AppError } = require('../middleware/errorHandler');

const prisma = new PrismaClient();

class BlogService {
  /**
   * Create a new blog post
   * @param {Object} blogData - Blog data
   * @param {string} authorId - Author ID
   * @returns {Object} Created blog
   */
  async createBlog(blogData, authorId) {
    const {
      title,
      content,
      excerpt,
      featuredImage,
      status = 'DRAFT',
      tags = [],
      metaTitle,
      metaDescription
    } = blogData;

    // Generate slug from title
    const slug = this.generateSlug(title);

    // Check if slug already exists
    await this.checkSlugUniqueness(slug);

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        featuredImage,
        status,
        tags,
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || excerpt,
        authorId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      },
      include: {
        author: {
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

    return blog;
  }

  /**
   * Get all blogs with filtering and pagination
   * @param {Object} filters - Filter options
   * @returns {Object} Paginated blogs list
   */
  async getBlogs(filters = {}) {
    const {
      page = 1,
      limit = 10,
      search,
      status,
      authorId,
      tags,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      published = false // If true, only show published blogs for public access
    } = filters;

    const skip = (page - 1) * limit;
    const where = {};

    // Apply filters
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } }
      ];
    }

    if (status) {
      where.status = status;
    }

    if (published) {
      where.status = 'PUBLISHED';
      where.publishedAt = { not: null };
    }

    if (authorId) {
      where.authorId = authorId;
    }

    if (tags && tags.length > 0) {
      where.tags = {
        hasSome: Array.isArray(tags) ? tags : [tags]
      };
    }

    // Get total count
    const total = await prisma.blog.count({ where });

    // Get blogs
    const blogs = await prisma.blog.findMany({
      where,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true
          }
        }
      },
      orderBy: { [sortBy]: sortOrder },
      skip,
      take: limit
    });

    return {
      blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Get blog by ID
   * @param {string} id - Blog ID
   * @param {boolean} incrementViews - Whether to increment view count
   * @returns {Object} Blog data
   */
  async getBlogById(id, incrementViews = false) {
    const blog = await prisma.blog.findUnique({
      where: { id },
      include: {
        author: {
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

    if (!blog) {
      throw new AppError('Blog not found', 404);
    }

    // Increment views if requested
    if (incrementViews) {
      await prisma.blog.update({
        where: { id },
        data: { views: { increment: 1 } }
      });
      blog.views += 1;
    }

    return blog;
  }

  /**
   * Get blog by slug
   * @param {string} slug - Blog slug
   * @param {boolean} incrementViews - Whether to increment view count
   * @returns {Object} Blog data
   */
  async getBlogBySlug(slug, incrementViews = false) {
    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: {
        author: {
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

    if (!blog) {
      throw new AppError('Blog not found', 404);
    }

    // Increment views if requested
    if (incrementViews) {
      await prisma.blog.update({
        where: { slug },
        data: { views: { increment: 1 } }
      });
      blog.views += 1;
    }

    return blog;
  }

  /**
   * Update blog
   * @param {string} id - Blog ID
   * @param {Object} updateData - Data to update
   * @param {string} adminId - Admin ID making the update
   * @returns {Object} Updated blog
   */
  async updateBlog(id, updateData, adminId) {
    const existingBlog = await prisma.blog.findUnique({
      where: { id }
    });

    if (!existingBlog) {
      throw new AppError('Blog not found', 404);
    }

    const {
      title,
      content,
      excerpt,
      featuredImage,
      status,
      tags,
      metaTitle,
      metaDescription
    } = updateData;

    // Generate new slug if title changed
    let slug = existingBlog.slug;
    if (title && title !== existingBlog.title) {
      slug = this.generateSlug(title);
      await this.checkSlugUniqueness(slug, id);
    }

    // Set publishedAt if status changed to PUBLISHED
    let publishedAt = existingBlog.publishedAt;
    if (status === 'PUBLISHED' && existingBlog.status !== 'PUBLISHED') {
      publishedAt = new Date();
    } else if (status !== 'PUBLISHED') {
      publishedAt = null;
    }

    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(title && { slug }),
        ...(content && { content }),
        ...(excerpt !== undefined && { excerpt }),
        ...(featuredImage !== undefined && { featuredImage }),
        ...(status && { status }),
        ...(tags && { tags }),
        ...(metaTitle !== undefined && { metaTitle }),
        ...(metaDescription !== undefined && { metaDescription }),
        publishedAt
      },
      include: {
        author: {
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

    return updatedBlog;
  }

  /**
   * Delete blog
   * @param {string} id - Blog ID
   */
  async deleteBlog(id) {
    const blog = await prisma.blog.findUnique({
      where: { id }
    });

    if (!blog) {
      throw new AppError('Blog not found', 404);
    }

    await prisma.blog.delete({
      where: { id }
    });
  }

  /**
   * Get blog statistics
   * @param {string} authorId - Optional author ID to filter stats
   * @returns {Object} Blog statistics
   */
  async getBlogStats(authorId = null) {
    const where = authorId ? { authorId } : {};

    const [
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      archivedBlogs,
      totalViews,
      topBlogs
    ] = await Promise.all([
      prisma.blog.count({ where }),
      prisma.blog.count({ where: { ...where, status: 'PUBLISHED' } }),
      prisma.blog.count({ where: { ...where, status: 'DRAFT' } }),
      prisma.blog.count({ where: { ...where, status: 'ARCHIVED' } }),
      prisma.blog.aggregate({
        where,
        _sum: { views: true }
      }),
      prisma.blog.findMany({
        where: { ...where, status: 'PUBLISHED' },
        orderBy: { views: 'desc' },
        take: 5,
        select: {
          id: true,
          title: true,
          slug: true,
          views: true,
          publishedAt: true
        }
      })
    ]);

    return {
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      archivedBlogs,
      totalViews: totalViews._sum.views || 0,
      topBlogs
    };
  }

  /**
   * Get all unique tags
   * @returns {Array} Array of unique tags
   */
  async getAllTags() {
    const blogs = await prisma.blog.findMany({
      where: { status: 'PUBLISHED' },
      select: { tags: true }
    });

    const allTags = blogs.flatMap(blog => blog.tags);
    const uniqueTags = [...new Set(allTags)].sort();

    return uniqueTags;
  }

  /**
   * Search blogs
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @returns {Object} Search results
   */
  async searchBlogs(query, options = {}) {
    const {
      page = 1,
      limit = 10,
      status = 'PUBLISHED'
    } = options;

    const skip = (page - 1) * limit;

    const where = {
      status,
      OR: [
        { title: { contains: query, mode: 'insensitive' } },
        { content: { contains: query, mode: 'insensitive' } },
        { excerpt: { contains: query, mode: 'insensitive' } },
        { tags: { hasSome: [query] } }
      ]
    };

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true
            }
          }
        },
        orderBy: { publishedAt: 'desc' },
        skip,
        take: limit
      }),
      prisma.blog.count({ where })
    ]);

    return {
      blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Get related blogs
   * @param {string} blogId - Blog ID
   * @param {number} limit - Number of related blogs
   * @returns {Array} Related blogs
   */
  async getRelatedBlogs(blogId, limit = 5) {
    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
      select: { tags: true, authorId: true }
    });

    if (!blog) {
      throw new AppError('Blog not found', 404);
    }

    // Find blogs with similar tags or same author
    const relatedBlogs = await prisma.blog.findMany({
      where: {
        AND: [
          { id: { not: blogId } },
          { status: 'PUBLISHED' },
          {
            OR: [
              { tags: { hasSome: blog.tags } },
              { authorId: blog.authorId }
            ]
          }
        ]
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true
          }
        }
      },
      orderBy: { publishedAt: 'desc' },
      take: limit
    });

    return relatedBlogs;
  }

  /**
   * Generate slug from title
   * @param {string} title - Blog title
   * @returns {string} Generated slug
   */
  generateSlug(title) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
  }

  /**
   * Check if slug is unique
   * @param {string} slug - Slug to check
   * @param {string} excludeId - Blog ID to exclude from check
   */
  async checkSlugUniqueness(slug, excludeId = null) {
    const where = { slug };
    if (excludeId) {
      where.id = { not: excludeId };
    }

    const existingBlog = await prisma.blog.findFirst({ where });

    if (existingBlog) {
      // Generate unique slug by appending timestamp
      const timestamp = Date.now();
      const newSlug = `${slug}-${timestamp}`;
      return newSlug;
    }

    return slug;
  }

  /**
   * Bulk update blog status
   * @param {Array} blogIds - Array of blog IDs
   * @param {string} status - New status
   * @returns {Object} Update result
   */
  async bulkUpdateStatus(blogIds, status) {
    const publishedAt = status === 'PUBLISHED' ? new Date() : null;

    const result = await prisma.blog.updateMany({
      where: {
        id: { in: blogIds }
      },
      data: {
        status,
        publishedAt
      }
    });

    return result;
  }

  /**
   * Get blogs by author
   * @param {string} authorId - Author ID
   * @param {Object} options - Query options
   * @returns {Object} Author's blogs
   */
  async getBlogsByAuthor(authorId, options = {}) {
    const {
      page = 1,
      limit = 10,
      status,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = options;

    const skip = (page - 1) * limit;
    const where = { authorId };

    if (status) {
      where.status = status;
    }

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        include: {
          author: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
              avatar: true
            }
          }
        },
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limit
      }),
      prisma.blog.count({ where })
    ]);

    return {
      blogs,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    };
  }

  /**
   * Upload featured image
   * @param {Object} file - File object
   * @param {string} blogId - Blog ID
   * @returns {string} Image URL
   */
  async uploadFeaturedImage(file, blogId) {
    const fileExtension = file.name.split('.').pop();
    const fileName = `blog_${blogId}_${Date.now()}.${fileExtension}`;
    const filePath = `${process.env.UPLOAD_PATH || './public/uploads'}/blogs/${fileName}`;

    try {
      await file.mv(filePath);
      return `/uploads/blogs/${fileName}`;
    } catch (error) {
      throw new AppError('Failed to upload image', 500);
    }
  }
}

module.exports = new BlogService();