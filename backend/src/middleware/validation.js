const { body, param, query, validationResult } = require('express-validator');
const { errorResponse } = require('./errorHandler');

/**
 * Handle validation errors
 */
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => ({
      field: error.path,
      message: error.msg,
      value: error.value
    }));

    return errorResponse(res, 'Validation failed', 400, {
      errors: errorMessages
    });
  }
  next();
};

// Auth validation rules
const registerValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('username')
    .isLength({ min: 3, max: 20 })
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username must be 3-20 characters long and contain only letters, numbers, and underscores'),
  body('password')
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  body('firstName')
    .optional()
    .isLength({ min: 2, max: 50 })
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('First name must be 2-50 characters long and contain only letters and spaces'),
  body('lastName')
    .optional()
    .isLength({ min: 2, max: 50 })
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Last name must be 2-50 characters long and contain only letters and spaces'),
  handleValidationErrors
];

const loginValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
  handleValidationErrors
];

const changePasswordValidation = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
    .withMessage('New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Password confirmation does not match new password');
      }
      return true;
    }),
  handleValidationErrors
];

// Blog validation rules
const createBlogValidation = [
  body('title')
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters long'),
  body('content')
    .isLength({ min: 50 })
    .withMessage('Content must be at least 50 characters long'),
  body('excerpt')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Excerpt must not exceed 500 characters'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .isLength({ min: 2, max: 30 })
    .withMessage('Each tag must be between 2 and 30 characters long'),
  body('status')
    .optional()
    .isIn(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
    .withMessage('Status must be DRAFT, PUBLISHED, or ARCHIVED'),
  body('metaTitle')
    .optional()
    .isLength({ max: 60 })
    .withMessage('Meta title must not exceed 60 characters'),
  body('metaDescription')
    .optional()
    .isLength({ max: 160 })
    .withMessage('Meta description must not exceed 160 characters'),
  handleValidationErrors
];

const updateBlogValidation = [
  param('id')
    .isString()
    .notEmpty()
    .withMessage('Blog ID is required'),
  body('title')
    .optional()
    .isLength({ min: 5, max: 200 })
    .withMessage('Title must be between 5 and 200 characters long'),
  body('content')
    .optional()
    .isLength({ min: 50 })
    .withMessage('Content must be at least 50 characters long'),
  body('excerpt')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Excerpt must not exceed 500 characters'),
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  body('tags.*')
    .optional()
    .isLength({ min: 2, max: 30 })
    .withMessage('Each tag must be between 2 and 30 characters long'),
  body('status')
    .optional()
    .isIn(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
    .withMessage('Status must be DRAFT, PUBLISHED, or ARCHIVED'),
  body('metaTitle')
    .optional()
    .isLength({ max: 60 })
    .withMessage('Meta title must not exceed 60 characters'),
  body('metaDescription')
    .optional()
    .isLength({ max: 160 })
    .withMessage('Meta description must not exceed 160 characters'),
  handleValidationErrors
];

// Contact form validation
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters long'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  body('phone')
    .optional()
    .matches(/^[\+]?[1-9][\d]{7,15}$/)
    .withMessage('Please provide a valid phone number'),

  body('company')
    .optional()
    .isLength({ max: 100 })
    .withMessage('Company name must not exceed 100 characters'),

  body('inquiryType')
    .optional(),
    // .isIn(['GENERAL', 'SUPPORT', 'SALES', 'PARTNERSHIP'])
    // .withMessage('Inquiry type must be one of: GENERAL, SUPPORT, SALES, PARTNERSHIP'),

  body('message')
    .isLength({ min: 2, max: 1000 })
    .withMessage('Message must be between 20 and 1000 characters long'),

  handleValidationErrors
];


// Chat validation rules
const chatMessageValidation = [
  body('content')
    .isLength({ min: 1, max: 1000 })
    .withMessage('Message content must be between 1 and 1000 characters long'),
  body('roomId')
    .isString()
    .notEmpty()
    .withMessage('Room ID is required'),
  body('messageType')
    .optional()
    .isIn(['TEXT', 'IMAGE', 'FILE', 'SYSTEM'])
    .withMessage('Message type must be TEXT, IMAGE, FILE, or SYSTEM'),
  handleValidationErrors
];

// Common validation rules
const idValidation = [
  param('id')
    .isString()
    .notEmpty()
    .withMessage('ID parameter is required'),
  handleValidationErrors
];

const paginationValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit must be a positive integer between 1 and 100'),
  query('sortBy')
    .optional()
    .isString()
    .withMessage('Sort by must be a string'),
  query('sortOrder')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage('Sort order must be asc or desc'),
  handleValidationErrors
];

// File upload validation
const fileUploadValidation = (allowedMimeTypes = [], maxSize = 5 * 1024 * 1024) => {
  return (req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return errorResponse(res, 'No files were uploaded', 400);
    }

    const file = req.files.file || Object.values(req.files)[0];

    // Check file size
    if (file.size > maxSize) {
      return errorResponse(res, `File size must be less than ${maxSize / (1024 * 1024)}MB`, 400);
    }

    // Check mime type if specified
    if (allowedMimeTypes.length > 0 && !allowedMimeTypes.includes(file.mimetype)) {
      return errorResponse(res, `File type not allowed. Allowed types: ${allowedMimeTypes.join(', ')}`, 400);
    }

    next();
  };
};

const contactStatusValidation = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['UNREAD', 'READ', 'REPLIED', 'CLOSED'])
    .withMessage('Status must be one of: UNREAD, READ, REPLIED, CLOSED'),

  handleValidationErrors
];

const contactReplyValidation = [
  body('replyMessage')
    .trim()
    .notEmpty()
    .withMessage('Reply message is required')
    .isLength({ min: 1, max: 5000 })
    .withMessage('Reply message must be between 1 and 5000 characters'),

  handleValidationErrors
];

const bulkContactValidation = [
  body('contactIds')
    .isArray({ min: 1 })
    .withMessage('Contact IDs array is required and must contain at least one ID'),

  body('contactIds.*')
    .isString()
    .notEmpty()
    .withMessage('Each contact ID must be a valid string'),

  body('status')
    .optional()
    .isIn(['UNREAD', 'READ', 'REPLIED', 'CLOSED'])
    .withMessage('Status must be one of: UNREAD, READ, REPLIED, CLOSED'),

  handleValidationErrors
];

const newsletterSubscribeValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address')
    .isLength({ max: 255 })
    .withMessage('Email must not exceed 255 characters'),

  handleValidationErrors
];

const newsletterUnsubscribeValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),

  handleValidationErrors
];

const bulkNewsletterValidation = [
  body('subscriberIds')
    .isArray({ min: 1 })
    .withMessage('Subscriber IDs array is required and must contain at least one ID'),

  body('subscriberIds.*')
    .isString()
    .notEmpty()
    .withMessage('Each subscriber ID must be a valid string'),

  handleValidationErrors
];



module.exports = {
  handleValidationErrors,
  registerValidation,
  loginValidation,
  changePasswordValidation,
  createBlogValidation,
  updateBlogValidation,
  contactValidation,
  chatMessageValidation,
  idValidation,
  paginationValidation,
  fileUploadValidation,
  contactStatusValidation,
  contactReplyValidation,
  bulkContactValidation,
  newsletterSubscribeValidation,
  newsletterUnsubscribeValidation,
  bulkNewsletterValidation
};