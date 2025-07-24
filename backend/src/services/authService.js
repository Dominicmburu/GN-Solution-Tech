const { PrismaClient } = require('@prisma/client');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const { generateTokenPair, verifyRefreshToken } = require('../utils/jwt');
const { AppError } = require('../middleware/errorHandler');

const prisma = new PrismaClient();

class AuthService {
    /**
     * Register a new admin
     * @param {Object} adminData - Admin registration data
     * @returns {Object} Created admin and tokens
     */
    async register(adminData) {
        const { email, username, password, firstName, lastName, role = 'ADMIN' } = adminData;

        // Check if admin already exists
        const existingAdmin = await prisma.admin.findFirst({
            where: {
                OR: [
                    { email },
                    { username }
                ]
            }
        });

        if (existingAdmin) {
            if (existingAdmin.email === email) {
                throw new AppError('Admin with this email already exists', 400);
            }
            if (existingAdmin.username === username) {
                throw new AppError('Admin with this username already exists', 400);
            }
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create admin
        const admin = await prisma.admin.create({
            data: {
                email,
                username,
                password: hashedPassword,
                firstName,
                lastName,
                role
            },
            select: {
                id: true,
                email: true,
                username: true,
                firstName: true,
                lastName: true,
                role: true,
                isActive: true,
                createdAt: true
            }
        });

        // Generate tokens
        const tokens = generateTokenPair({
            adminId: admin.id,
            email: admin.email,
            role: admin.role
        });

        // Store refresh token
        await this.storeRefreshToken(admin.id, tokens.refreshToken);

        return {
            admin,
            tokens
        };
    }
}