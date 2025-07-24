/**
 * Custom error class for application errors
 */
class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Async error handler wrapper
 * @param {Function} fn - Async function to wrap
 * @returns {Function} Express middleware
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error('Error:', {
    message: err.message,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent')
  });

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new AppError(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = new AppError(message, 400);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    const message = 'Invalid token';
    error = new AppError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Token expired';
    error = new AppError(message, 401);
  }

  // Prisma errors
  if (err.name === 'PrismaClientKnownRequestError') {
    error = handlePrismaError(err);
  }

  // Multer errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    const message = 'File too large';
    error = new AppError(message, 400);
  }

  // Express validation errors
  if (err.name === 'ValidationError' && err.errors) {
    const message = Object.values(err.errors).map(e => e.msg).join(', ');
    error = new AppError(message, 400);
  }

  // Send error response
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack,
      details: error 
    })
  });
};

/**
 * Handle Prisma specific errors
 */
const handlePrismaError = (err) => {
  switch (err.code) {
    case 'P2002':
      return new AppError('Duplicate field value entered', 400);
    case 'P2014':
      return new AppError('Invalid ID provided', 400);
    case 'P2003':
      return new AppError('Invalid input data', 400);
    case 'P2025':
      return new AppError('Record not found', 404);
    default:
      return new AppError('Database error occurred', 500);
  }
};

/**
 * 404 Not Found handler
 */
const notFound = (req, res, next) => {
  const error = new AppError(`Not found - ${req.originalUrl}`, 404);
  next(error);
};

/**
 * Validation error handler
 */
const validationError = (errors) => {
  const message = errors.array().map(error => error.msg).join(', ');
  return new AppError(message, 400);
};

/**
 * Create standardized error response
 */
const createError = (message, statusCode = 500, details = null) => {
  const error = new AppError(message, statusCode);
  if (details) {
    error.details = details;
  }
  return error;
};

/**
 * Success response helper
 */
const successResponse = (res, data, message = 'Success', statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};

/**
 * Error response helper
 */
const errorResponse = (res, message, statusCode = 500, details = null) => {
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(details && { details })
  });
};

module.exports = {
  AppError,
  asyncHandler,
  errorHandler,
  notFound,
  validationError,
  createError,
  successResponse,
  errorResponse
};