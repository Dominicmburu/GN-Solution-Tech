const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

/**
 * Hash a password
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password
 */
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

/**
 * Compare password with hash
 * @param {string} password - Plain text password
 * @param {string} hashedPassword - Hashed password
 * @returns {Promise<boolean>} True if passwords match
 */
const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};

/**
 * Generate a random password
 * @param {number} length - Password length (default: 12)
 * @returns {string} Random password
 */
const generateRandomPassword = (length = 12) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  
  return password;
};

/**
 * Check password strength
 * @param {string} password - Password to check
 * @returns {Object} Password strength analysis
 */
const checkPasswordStrength = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= minLength;
  
  const score = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar, isLongEnough]
    .reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
  
  let strength = 'Very Weak';
  if (score >= 4) strength = 'Strong';
  else if (score >= 3) strength = 'Medium';
  else if (score >= 2) strength = 'Weak';
  
  return {
    score,
    strength,
    isValid: score >= 3, // At least medium strength required
    requirements: {
      minLength: isLongEnough,
      hasUpperCase,
      hasLowerCase,
      hasNumbers,
      hasSpecialChar
    },
    suggestions: [
      !isLongEnough && `Password should be at least ${minLength} characters long`,
      !hasUpperCase && 'Add uppercase letters',
      !hasLowerCase && 'Add lowercase letters',
      !hasNumbers && 'Add numbers',
      !hasSpecialChar && 'Add special characters (!@#$%^&*)'
    ].filter(Boolean)
  };
};

module.exports = {
  hashPassword,
  comparePassword,
  generateRandomPassword,
  checkPasswordStrength
};