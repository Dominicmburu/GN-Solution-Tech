const rateLimit = require('express-rate-limit');

// General rate limiter
const rateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Too many requests from this IP, please try again later',
    retryAfter: Math.ceil((parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000) / 1000)
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests',
      message: 'Too many requests from this IP, please try again later',
      retryAfter: Math.ceil((parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000) / 1000)
    });
  }
});

// Strict rate limiter for auth endpoints
const authRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many authentication attempts',
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
    retryAfter: 900 // 15 minutes in seconds
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Don't count successful requests
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many authentication attempts',
      message: 'Too many login attempts from this IP, please try again after 15 minutes',
      retryAfter: 900
    });
  }
});

// Contact form rate limiter
const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: {
    error: 'Too many contact form submissions',
    message: 'Too many contact form submissions from this IP, please try again after 1 hour',
    retryAfter: 3600 // 1 hour in seconds
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many contact form submissions',
      message: 'Too many contact form submissions from this IP, please try again after 1 hour',
      retryAfter: 3600
    });
  }
});

const newsletterRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5, // Limit each IP to 5 newsletter operations per windowMs
  message: {
    success: false,
    message: 'Too many newsletter requests from this IP, please try again after 5 minutes.',
    retryAfter: 5 * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: 'Too many newsletter requests from this IP, please try again after 5 minutes.',
      retryAfter: Math.round((req.rateLimit.resetTime - Date.now()) / 1000)
    });
  }
});

const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Chat message rate limiter
const chatRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 30, // limit each IP to 30 messages per minute
  message: {
    error: 'Too many messages',
    message: 'Too many messages sent, please slow down',
    retryAfter: 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many messages',
      message: 'Too many messages sent, please slow down',
      retryAfter: 60
    });
  }
});

// Upload rate limiter
const uploadRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 uploads per 15 minutes
  message: {
    error: 'Too many uploads',
    message: 'Too many file uploads from this IP, please try again later',
    retryAfter: 900
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many uploads',
      message: 'Too many file uploads from this IP, please try again later',
      retryAfter: 900
    });
  }
});

// API rate limiter for public endpoints
const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs for API
  message: {
    error: 'API rate limit exceeded',
    message: 'Too many API requests from this IP, please try again later',
    retryAfter: 900
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'API rate limit exceeded',
      message: 'Too many API requests from this IP, please try again later',
      retryAfter: 900
    });
  }
});

// Create custom rate limiter
const createRateLimiter = (windowMs, max, message, skipSuccessfulRequests = false) => {
  return rateLimit({
    windowMs,
    max,
    message: {
      error: 'Rate limit exceeded',
      message: message || 'Too many requests from this IP, please try again later',
      retryAfter: Math.ceil(windowMs / 1000)
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests,
    handler: (req, res) => {
      res.status(429).json({
        error: 'Rate limit exceeded',
        message: message || 'Too many requests from this IP, please try again later',
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }
  });
};

module.exports = {
  rateLimiter,
  authRateLimiter,
  contactRateLimiter,
  chatRateLimiter,
  uploadRateLimiter,
  apiRateLimiter,
  createRateLimiter,
  contactRateLimiter,
  newsletterRateLimiter,
  generalRateLimiter
};