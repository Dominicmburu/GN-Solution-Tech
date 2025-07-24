// HTTP Status Codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};

// Admin Roles
const ADMIN_ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

// Blog Status
const BLOG_STATUS = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

// Contact Status
const CONTACT_STATUS = {
  UNREAD: 'UNREAD',
  READ: 'READ',
  REPLIED: 'REPLIED',
  CLOSED: 'CLOSED'
};

// Message Types
const MESSAGE_TYPES = {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  FILE: 'FILE',
  SYSTEM: 'SYSTEM'
};

// File Upload Limits
const FILE_LIMITS = {
  AVATAR: {
    MAX_SIZE: 2 * 1024 * 1024, // 2MB
    ALLOWED_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
  },
  BLOG_IMAGE: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
  },
  CHAT_FILE: {
    MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_TYPES: [
      'image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp',
      'application/pdf', 'text/plain', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
  }
};

// Pagination Defaults
const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100
};

// JWT Configuration
const JWT_CONFIG = {
  ACCESS_TOKEN_EXPIRES_IN: '15m',
  REFRESH_TOKEN_EXPIRES_IN: '7d',
  ISSUER: 'admin-blog-chat-server',
  AUDIENCE: 'admin-dashboard'
};

// Rate Limiting
const RATE_LIMITS = {
  GENERAL: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100
  },
  AUTH: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 5
  },
  CONTACT: {
    WINDOW_MS: 60 * 60 * 1000, // 1 hour
    MAX_REQUESTS: 5
  },
  CHAT: {
    WINDOW_MS: 1 * 60 * 1000, // 1 minute
    MAX_REQUESTS: 30
  },
  UPLOAD: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 10
  }
};

// Email Templates
const EMAIL_TEMPLATES = {
  CONTACT_NOTIFICATION: 'contact_notification',
  CONTACT_CONFIRMATION: 'contact_confirmation',
  CONTACT_REPLY: 'contact_reply',
  PASSWORD_RESET: 'password_reset',
  WELCOME_ADMIN: 'welcome_admin',
  CHAT_NOTIFICATION: 'chat_notification'
};

// Socket Events
const SOCKET_EVENTS = {
  // Connection
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  ERROR: 'error',
  
  // Room Management
  JOIN_ROOM: 'join_room',
  LEAVE_ROOM: 'leave_room',
  ROOM_JOINED: 'room_joined',
  USER_JOINED: 'user_joined',
  USER_LEFT: 'user_left',
  USER_KICKED: 'user_kicked',
  KICKED_FROM_ROOM: 'kicked_from_room',
  
  // Messaging
  SEND_MESSAGE: 'send_message',
  NEW_MESSAGE: 'new_message',
  DELETE_MESSAGE: 'delete_message',
  MESSAGE_DELETED: 'message_deleted',
  MARK_MESSAGES_READ: 'mark_messages_read',
  MESSAGES_READ: 'messages_read',
  
  // Typing Indicators
  TYPING_START: 'typing_start',
  TYPING_STOP: 'typing_stop',
  USER_TYPING: 'user_typing',
  USER_STOPPED_TYPING: 'user_stopped_typing',
  
  // Participants
  GET_PARTICIPANTS: 'get_participants',
  PARTICIPANTS_LIST: 'participants_list',
  PARTICIPANTS_UPDATED: 'participants_updated',
  
  // Admin Actions
  KICK_USER: 'kick_user',
  GET_ROOM_STATS: 'get_room_stats',
  ROOM_STATS: 'room_stats'
};

// Error Messages
const ERROR_MESSAGES = {
  // Authentication
  AUTH_REQUIRED: 'Authentication required',
  INVALID_CREDENTIALS: 'Invalid credentials',
  TOKEN_EXPIRED: 'Token expired',
  ACCOUNT_DISABLED: 'Account has been deactivated',
  INSUFFICIENT_PERMISSIONS: 'Insufficient permissions',
  
  // Validation
  VALIDATION_FAILED: 'Validation failed',
  REQUIRED_FIELD: 'This field is required',
  INVALID_EMAIL: 'Please provide a valid email address',
  INVALID_PASSWORD: 'Password must meet security requirements',
  
  // Resources
  NOT_FOUND: 'Resource not found',
  ALREADY_EXISTS: 'Resource already exists',
  DUPLICATE_ENTRY: 'Duplicate entry',
  
  // File Upload
  FILE_TOO_LARGE: 'File size exceeds limit',
  INVALID_FILE_TYPE: 'File type not allowed',
  UPLOAD_FAILED: 'File upload failed',
  
  // Rate Limiting
  RATE_LIMIT_EXCEEDED: 'Too many requests, please try again later',
  
  // Server
  INTERNAL_ERROR: 'Internal server error',
  SERVICE_UNAVAILABLE: 'Service temporarily unavailable'
};

// Success Messages
const SUCCESS_MESSAGES = {
  // Authentication
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logout successful',
  PASSWORD_CHANGED: 'Password changed successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  
  // CRUD Operations
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  RETRIEVED: 'Resource retrieved successfully',
  
  // File Upload
  UPLOAD_SUCCESS: 'File uploaded successfully',
  
  // Email
  EMAIL_SENT: 'Email sent successfully',
  
  // Chat
  MESSAGE_SENT: 'Message sent successfully',
  ROOM_JOINED: 'Joined room successfully'
};

// Regex Patterns
const REGEX_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  USERNAME: /^[a-zA-Z0-9_]+$/,
  PHONE: /^[\+]?[1-9][\d]{0,15}$/,
  SLUG: /^[a-z0-9]+(?:-[a-z0-9]+)*$/
};

// Database Configuration
const DB_CONFIG = {
  CONNECTION_TIMEOUT: 10000, // 10 seconds
  QUERY_TIMEOUT: 5000, // 5 seconds
  MAX_RETRIES: 3
};

// Cache Configuration
const CACHE_CONFIG = {
  TTL: {
    SHORT: 5 * 60, // 5 minutes
    MEDIUM: 30 * 60, // 30 minutes
    LONG: 60 * 60, // 1 hour
    VERY_LONG: 24 * 60 * 60 // 24 hours
  }
};

// Environment Types
const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  TEST: 'test',
  STAGING: 'staging'
};

module.exports = {
  HTTP_STATUS,
  ADMIN_ROLES,
  BLOG_STATUS,
  CONTACT_STATUS,
  MESSAGE_TYPES,
  FILE_LIMITS,
  PAGINATION,
  JWT_CONFIG,
  RATE_LIMITS,
  EMAIL_TEMPLATES,
  SOCKET_EVENTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  REGEX_PATTERNS,
  DB_CONFIG,
  CACHE_CONFIG,
  ENVIRONMENTS
};