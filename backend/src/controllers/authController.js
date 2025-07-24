const authService = require('../services/authService');
const { asyncHandler, successResponse, errorResponse } = require('../middleware/errorHandler');

/**
 * Register new admin
 */
const register = asyncHandler(async (req, res) => {
  const result = await authService.register(req.body);

  // Set refresh token as httpOnly cookie
  res.cookie('refreshToken', result.tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  // Set access token as cookie (optional, for easier frontend handling)
  res.cookie('accessToken', result.tokens.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000 // 15 minutes
  });

  successResponse(res, {
    admin: result.admin,
    accessToken: result.tokens.accessToken,
    expiresIn: result.tokens.expiresIn
  }, 'Admin registered successfully', 201);
});

/**
 * Login admin
 */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  const result = await authService.login(email, password);

  // Set refresh token as httpOnly cookie
  res.cookie('refreshToken', result.tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  // Set access token as cookie (optional, for easier frontend handling)
  res.cookie('accessToken', result.tokens.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000 // 15 minutes
  });

  successResponse(res, {
    admin: result.admin,
    accessToken: result.tokens.accessToken,
    expiresIn: result.tokens.expiresIn
  }, 'Login successful');
});

/**
 * Refresh access token
 */
const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if (!refreshToken) {
    return errorResponse(res, 'Refresh token not provided', 401);
  }

  const result = await authService.refreshToken(refreshToken);

  // Set new refresh token as httpOnly cookie
  res.cookie('refreshToken', result.tokens.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  // Set new access token as cookie
  res.cookie('accessToken', result.tokens.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 15 * 60 * 1000 // 15 minutes
  });

  successResponse(res, {
    admin: result.admin,
    accessToken: result.tokens.accessToken,
    expiresIn: result.tokens.expiresIn
  }, 'Token refreshed successfully');
});

/**
 * Logout admin
 */
const logout = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    await authService.logout(refreshToken);
  }

  // Clear cookies
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');

  successResponse(res, null, 'Logout successful');
});

/**
 * Logout from all devices
 */
const logoutAll = asyncHandler(async (req, res) => {
  await authService.logoutAll(req.admin.id);

  // Clear cookies
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');

  successResponse(res, null, 'Logged out from all devices');
});

/**
 * Get current admin profile
 */
const getProfile = asyncHandler(async (req, res) => {
  const admin = await authService.getProfile(req.admin.id);
  successResponse(res, admin, 'Profile retrieved successfully');
});

/**
 * Update admin profile
 */
const updateProfile = asyncHandler(async (req, res) => {
  const updatedAdmin = await authService.updateProfile(req.admin.id, req.body);
  successResponse(res, updatedAdmin, 'Profile updated successfully');
});

/**
 * Change password
 */
const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  
  await authService.changePassword(req.admin.id, currentPassword, newPassword);

  // Clear cookies to force re-login
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');

  successResponse(res, null, 'Password changed successfully. Please log in again.');
});

/**
 * Get admin by ID (Admin only)
 */
const getAdminById = asyncHandler(async (req, res) => {
  const admin = await authService.getAdminById(req.params.id);
  successResponse(res, admin, 'Admin retrieved successfully');
});

/**
 * List all admins (Super admin only)
 */
const listAdmins = asyncHandler(async (req, res) => {
  const filters = {
    page: parseInt(req.query.page) || 1,
    limit: parseInt(req.query.limit) || 10,
    search: req.query.search,
    role: req.query.role,
    isActive: req.query.isActive !== undefined ? req.query.isActive === 'true' : undefined,
    sortBy: req.query.sortBy || 'createdAt',
    sortOrder: req.query.sortOrder || 'desc'
  };

  const result = await authService.listAdmins(filters);
  successResponse(res, result, 'Admins retrieved successfully');
});

/**
 * Toggle admin status (Super admin only)
 */
const toggleAdminStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { isActive } = req.body;

  const updatedAdmin = await authService.toggleAdminStatus(id, isActive);
  
  const message = isActive ? 'Admin activated successfully' : 'Admin deactivated successfully';
  successResponse(res, updatedAdmin, message);
});

/**
 * Check authentication status
 */
const checkAuth = asyncHandler(async (req, res) => {
  // If we reach here, the authenticate middleware has already verified the token
  successResponse(res, {
    isAuthenticated: true,
    admin: req.admin
  }, 'Authentication valid');
});

/**
 * Upload avatar
 */
const uploadAvatar = asyncHandler(async (req, res) => {
  if (!req.files || !req.files.avatar) {
    return errorResponse(res, 'No avatar file provided', 400);
  }

  const avatar = req.files.avatar;
  
  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  if (!allowedTypes.includes(avatar.mimetype)) {
    return errorResponse(res, 'Invalid file type. Only JPEG, PNG, and GIF are allowed', 400);
  }

  // Validate file size (max 2MB)
  const maxSize = 2 * 1024 * 1024; // 2MB
  if (avatar.size > maxSize) {
    return errorResponse(res, 'File size too large. Maximum 2MB allowed', 400);
  }

  // Generate unique filename
  const fileExtension = avatar.name.includes('.') ? avatar.name.split('.').pop() : '';
  const fileName = `avatar_${req.admin.id}_${Date.now()}.${fileExtension}`;
  const filePath = `${process.env.UPLOAD_PATH || './public/uploads'}/avatars/${fileName}`;

  try {
    // Move file to uploads directory
    await avatar.mv(filePath);

    // Update admin avatar in database
    const avatarUrl = `/uploads/avatars/${fileName}`;
    const updatedAdmin = await authService.updateProfile(req.admin.id, { avatar: avatarUrl });

    successResponse(res, {
      admin: updatedAdmin,
      avatarUrl
    }, 'Avatar uploaded successfully');
  } catch (error) {
    console.error('Avatar upload error:', error);
    errorResponse(res, 'Failed to upload avatar', 500);
  }
});

module.exports = {
  register,
  login,
  refreshToken,
  logout,
  logoutAll,
  getProfile,
  updateProfile,
  changePassword,
  getAdminById,
  listAdmins,
  toggleAdminStatus,
  checkAuth,
  uploadAvatar
};