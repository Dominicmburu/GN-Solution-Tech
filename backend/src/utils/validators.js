const { REGEX_PATTERNS } = require('./constants');

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  return REGEX_PATTERNS.EMAIL.test(email.trim());
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {Object} Validation result with details
 */
const validatePassword = (password) => {
  if (!password || typeof password !== 'string') {
    return {
      isValid: false,
      errors: ['Password is required']
    };
  }

  const errors = [];
  
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/(?=.*\d)/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  if (!/(?=.*[@$!%*?&])/.test(password)) {
    errors.push('Password must contain at least one special character (@$!%*?&)');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {Object} Validation result
 */
const validateUsername = (username) => {
  if (!username || typeof username !== 'string') {
    return {
      isValid: false,
      errors: ['Username is required']
    };
  }

  const errors = [];
  const trimmedUsername = username.trim();
  
  if (trimmedUsername.length < 3 || trimmedUsername.length > 20) {
    errors.push('Username must be between 3 and 20 characters long');
  }
  
  if (!REGEX_PATTERNS.USERNAME.test(trimmedUsername)) {
    errors.push('Username can only contain letters, numbers, and underscores');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
const isValidPhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  return REGEX_PATTERNS.PHONE.test(phone.trim());
};

/**
 * Validate slug
 * @param {string} slug - Slug to validate
 * @returns {boolean} True if valid
 */
const isValidSlug = (slug) => {
  if (!slug || typeof slug !== 'string') return false;
  return REGEX_PATTERNS.SLUG.test(slug.trim());
};

/**
 * Validate URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid
 */
const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate file type
 * @param {string} mimetype - File mimetype
 * @param {string[]} allowedTypes - Array of allowed mimetypes
 * @returns {boolean} True if valid
 */
const isValidFileType = (mimetype, allowedTypes) => {
  if (!mimetype || !Array.isArray(allowedTypes)) return false;
  return allowedTypes.includes(mimetype);
};

/**
 * Validate file size
 * @param {number} size - File size in bytes
 * @param {number} maxSize - Maximum allowed size in bytes
 * @returns {boolean} True if valid
 */
const isValidFileSize = (size, maxSize) => {
  if (typeof size !== 'number' || typeof maxSize !== 'number') return false;
  return size <= maxSize;
};

/**
 * Validate pagination parameters
 * @param {Object} params - Pagination parameters
 * @returns {Object} Validated and normalized parameters
 */
const validatePagination = (params) => {
  const { page = 1, limit = 10 } = params;
  
  const normalizedPage = Math.max(1, parseInt(page) || 1);
  const normalizedLimit = Math.min(100, Math.max(1, parseInt(limit) || 10));
  
  return {
    page: normalizedPage,
    limit: normalizedLimit,
    skip: (normalizedPage - 1) * normalizedLimit
  };
};

/**
 * Validate sort parameters
 * @param {Object} params - Sort parameters
 * @param {string[]} allowedFields - Allowed sort fields
 * @returns {Object} Validated sort parameters
 */
const validateSort = (params, allowedFields = []) => {
  const { sortBy = 'createdAt', sortOrder = 'desc' } = params;
  
  const normalizedSortBy = allowedFields.length > 0 && !allowedFields.includes(sortBy) 
    ? 'createdAt' 
    : sortBy;
  
  const normalizedSortOrder = ['asc', 'desc'].includes(sortOrder?.toLowerCase()) 
    ? sortOrder.toLowerCase() 
    : 'desc';
  
  return {
    sortBy: normalizedSortBy,
    sortOrder: normalizedSortOrder
  };
};

/**
 * Validate object ID (for database IDs)
 * @param {string} id - ID to validate
 * @returns {boolean} True if valid
 */
const isValidObjectId = (id) => {
  if (!id || typeof id !== 'string') return false;
  // For Prisma with cuid, check if it's a valid cuid
  return /^c[a-z0-9]{24}$/.test(id) || /^[a-zA-Z0-9_-]{21,}$/.test(id);
};

/**
 * Validate date string
 * @param {string} dateString - Date string to validate
 * @returns {boolean} True if valid
 */
const isValidDate = (dateString) => {
  if (!dateString) return false;
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

/**
 * Validate array of strings
 * @param {any} arr - Array to validate
 * @param {number} maxLength - Maximum array length
 * @returns {boolean} True if valid
 */
const isValidStringArray = (arr, maxLength = 100) => {
  if (!Array.isArray(arr)) return false;
  if (arr.length > maxLength) return false;
  return arr.every(item => typeof item === 'string' && item.trim().length > 0);
};

/**
 * Validate blog content
 * @param {Object} blogData - Blog data to validate
 * @returns {Object} Validation result
 */
const validateBlogContent = (blogData) => {
  const { title, content, excerpt, tags, metaTitle, metaDescription } = blogData;
  const errors = [];

  // Title validation
  if (!title || typeof title !== 'string' || title.trim().length < 5) {
    errors.push('Title must be at least 5 characters long');
  }
  if (title && title.length > 200) {
    errors.push('Title must not exceed 200 characters');
  }

  // Content validation
  if (!content || typeof content !== 'string' || content.trim().length < 50) {
    errors.push('Content must be at least 50 characters long');
  }

  // Excerpt validation
  if (excerpt && excerpt.length > 500) {
    errors.push('Excerpt must not exceed 500 characters');
  }

  // Tags validation
  if (tags && !isValidStringArray(tags, 10)) {
    errors.push('Tags must be an array of strings with maximum 10 items');
  }

  // Meta title validation
  if (metaTitle && metaTitle.length > 60) {
    errors.push('Meta title must not exceed 60 characters');
  }

  // Meta description validation
  if (metaDescription && metaDescription.length > 160) {
    errors.push('Meta description must not exceed 160 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validate contact form data
 * @param {Object} contactData - Contact form data
 * @returns {Object} Validation result
 */
const validateContactForm = (contactData) => {
  const { firstName, lastName, email, phone, subject, message } = contactData;
  const errors = [];

  // First name validation
  if (!firstName || typeof firstName !== 'string' || firstName.trim().length < 2) {
    errors.push('First name must be at least 2 characters long');
  }
  if (firstName && firstName.length > 50) {
    errors.push('First name must not exceed 50 characters');
  }

  // Last name validation
  if (!lastName || typeof lastName !== 'string' || lastName.trim().length < 2) {
    errors.push('Last name must be at least 2 characters long');
  }
  if (lastName && lastName.length > 50) {
    errors.push('Last name must not exceed 50 characters');
  }

  // Email validation
  if (!isValidEmail(email)) {
    errors.push('Please provide a valid email address');
  }

  // Phone validation (optional)
  if (phone && !isValidPhone(phone)) {
    errors.push('Please provide a valid phone number');
  }

  // Subject validation
  if (!subject || typeof subject !== 'string' || subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  }
  if (subject && subject.length > 100) {
    errors.push('Subject must not exceed 100 characters');
  }

  // Message validation
  if (!message || typeof message !== 'string' || message.trim().length < 20) {
    errors.push('Message must be at least 20 characters long');
  }
  if (message && message.length > 1000) {
    errors.push('Message must not exceed 1000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Sanitize string input
 * @param {string} input - Input to sanitize
 * @param {number} maxLength - Maximum length
 * @returns {string} Sanitized string
 */
const sanitizeString = (input, maxLength = 1000) => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .substring(0, maxLength)
    .replace(/[<>]/g, ''); // Remove < and > characters
};

/**
 * Validate and sanitize HTML content
 * @param {string} html - HTML content
 * @returns {string} Sanitized HTML
 */
const sanitizeHtml = (html) => {
  if (!html || typeof html !== 'string') return '';
  
  // Basic HTML sanitization - in production, use a library like DOMPurify
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '');
};

module.exports = {
  isValidEmail,
  validatePassword,
  validateUsername,
  isValidPhone,
  isValidSlug,
  isValidUrl,
  isValidFileType,
  isValidFileSize,
  validatePagination,
  validateSort,
  isValidObjectId,
  isValidDate,
  isValidStringArray,
  validateBlogContent,
  validateContactForm,
  sanitizeString,
  sanitizeHtml
};