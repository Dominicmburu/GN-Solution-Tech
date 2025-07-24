const express = require('express');
const router = express.Router();

// Import controllers
const authController = require('../controllers/authController');

// Import middleware
const { authenticate } = require('../middleware/auth');
const { authenticateAdmin, authenticateSuperAdmin } = require('../middleware/adminAuth');
const { authRateLimiter, uploadRateLimiter } = require('../middleware/rateLimiter');
const {
  registerValidation,
  loginValidation,
  changePasswordValidation,
  idValidation,
  paginationValidation,
  fileUploadValidation
} = require('../middleware/validation');

// Public routes (no authentication required)
router.post('/register', authRateLimiter, registerValidation, authController.register);
router.post('/login', authRateLimiter, loginValidation, authController.login);
router.post('/refresh-token', authController.refreshToken);

router.use(authenticate);

// Current admin routes
router.get('/profile', authController.getProfile);
router.put('/profile', authController.updateProfile);
router.post('/change-password', changePasswordValidation, authController.changePassword);
router.post('/logout', authController.logout);
router.post('/logout-all', authController.logoutAll);
router.get('/check', authController.checkAuth);

// Avatar upload
router.post('/upload-avatar', 
  uploadRateLimiter,
  fileUploadValidation(['image/jpeg', 'image/jpg', 'image/png', 'image/gif'], 2 * 1024 * 1024),
  authController.uploadAvatar
);

// Admin management routes (Admin role required)
router.get('/admin/:id', authenticateAdmin, idValidation, authController.getAdminById);

// Super admin routes (Super admin role required)
router.get('/admins', authenticateSuperAdmin, paginationValidation, authController.listAdmins);
router.patch('/admin/:id/status', authenticateSuperAdmin, idValidation, authController.toggleAdminStatus);

module.exports = router;