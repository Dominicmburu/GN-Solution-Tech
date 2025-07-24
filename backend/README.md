# Admin Blog Chat Server

A comprehensive Node.js server with admin authentication, blog management, live chat functionality, and contact forms. Built with Express, Prisma, PostgreSQL, Socket.IO, and JWT authentication.

## 🚀 Features

- **Admin Authentication & Authorization**
  - JWT-based authentication with refresh tokens
  - Role-based access control (Super Admin, Admin, Moderator)
  - Secure password hashing with bcrypt
  - httpOnly cookies for token storage

- **Blog Management**
  - Full CRUD operations for blog posts
  - Draft, Published, and Archived statuses
  - SEO-friendly slugs and meta tags
  - Featured image uploads
  - Tag system and search functionality
  - View tracking and statistics

- **Live Chat System**
  - Real-time chat with Socket.IO
  - Support for guest users and admins
  - Multiple chat rooms
  - File sharing capabilities
  - Typing indicators
  - Message history and search

- **Contact Forms**
  - Contact form submissions
  - Status tracking (Unread, Read, Replied, Closed)
  - Email notifications
  - Bulk operations and export to CSV

- **Security & Performance**
  - Rate limiting
  - Input validation and sanitization
  - CORS configuration
  - Helmet for security headers
  - File upload restrictions
  - Error handling and logging

## 📋 Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admin-blog-chat-server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
   JWT_SECRET="your-super-secret-jwt-key"
   JWT_REFRESH_SECRET="your-super-secret-refresh-jwt-key"
   PORT=5000
   FRONTEND_URL="http://localhost:3000"
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT=587
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run database migrations
   npm run prisma:migrate
   
   # Seed the database with sample data
   npm run prisma:seed
   ```

5. **Create Upload Directories**
   ```bash
   mkdir -p public/uploads/avatars
   mkdir -p public/uploads/blogs
   mkdir -p public/uploads/chat
   ```

## 🚦 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or your configured PORT).

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new admin
- `POST /api/auth/login` - Admin login
- `POST /api/auth/refresh-token` - Refresh access token
- `POST /api/auth/logout` - Logout
- `GET /api/auth/profile` - Get current admin profile
- `PUT /api/auth/profile` - Update admin profile
- `POST /api/auth/change-password` - Change password

### Blog Management
- `GET /api/blogs` - Get all blogs (admin)
- `GET /api/blogs/public` - Get published blogs (public)
- `POST /api/blogs` - Create new blog
- `GET /api/blogs/:id` - Get blog by ID
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `GET /api/blogs/stats` - Get blog statistics

### Contact Forms
- `POST /api/contact` - Submit contact form (public)
- `GET /api/contact` - Get all contacts (admin)
- `GET /api/contact/:id` - Get contact by ID (admin)
- `PATCH /api/contact/:id/status` - Update contact status (admin)
- `POST /api/contact/:id/reply` - Reply to contact (admin)

### Chat System
- `GET /api/chat/rooms` - Get chat rooms
- `POST /api/chat/rooms` - Create chat room (admin)
- `GET /api/chat/rooms/:roomId/messages` - Get room messages
- `POST /api/chat/rooms/:roomId/messages` - Send message
- `GET /api/chat/stats` - Get chat statistics (admin)

## 🔌 Socket.IO Events

### Client to Server
- `join_room` - Join a chat room
- `leave_room` - Leave a chat room
- `send_message` - Send a message
- `typing_start` - Start typing indicator
- `typing_stop` - Stop typing indicator
- `mark_messages_read` - Mark messages as read

### Server to Client
- `room_joined` - Successfully joined room
- `new_message` - New message received
- `user_joined` - User joined room
- `user_left` - User left room
- `user_typing` - User is typing
- `participants_updated` - Updated participant list

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **Admin** - Admin users with roles and authentication
- **Blog** - Blog posts with content, metadata, and status
- **Contact** - Contact form submissions
- **ChatRoom** - Chat rooms for conversations
- **ChatMessage** - Individual chat messages
- **ChatParticipant** - Chat room participants
- **RefreshToken** - JWT refresh tokens

## 👥 Default Accounts

After running the seed script, you'll have these test accounts:

- **Super Admin**: `superadmin@example.com` / `SuperAdmin123!`
- **Admin**: `admin@example.com` / `Admin123!`
- **Moderator**: `moderator@example.com` / `Moderator123!`

## 🔒 Security Features

- Password hashing with bcrypt (12 rounds)
- JWT tokens with short expiration times
- Refresh token rotation
- Rate limiting on all endpoints
- Input validation and sanitization
- CORS protection
- Helmet security headers
- File upload restrictions
- SQL injection prevention with Prisma

## 📊 Monitoring & Logging

- Request logging with Morgan
- Error tracking and handling
- Performance monitoring
- Database query logging (development)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📦 Deployment

1. **Environment Variables**
   Set all required environment variables in your production environment.

2. **Database Migration**
   ```bash
   npm run prisma:migrate
   ```

3. **Build and Start**
   ```bash
   npm start
   ```

4. **Process Management** (Optional)
   Use PM2 for production process management:
   ```bash
   npm install -g pm2
   pm2 start server.js --name "admin-server"
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: [your-email@example.com]

## 🔄 Version History

- **v1.0.0** - Initial release with all core features
  - Admin authentication and authorization
  - Blog management system
  - Live chat functionality
  - Contact form handling
  - File upload capabilities
  - Real-time notifications


# Node.js Server File Structure

```
project-root/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── blogController.js
│   │   ├── chatController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── adminAuth.js
│   │   ├── errorHandler.js
│   │   ├── validation.js
│   │   └── rateLimiter.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── blogs.js
│   │   ├── chat.js
│   │   └── contact.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── blogService.js
│   │   ├── chatService.js
│   │   ├── contactService.js
│   │   └── emailService.js
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── bcrypt.js
│   │   ├── constants.js
│   │   └── validators.js
│   ├── config/
│   │   ├── database.js
│   │   ├── jwt.js
│   │   └── cors.js
│   ├── socket/
│   │   ├── socketHandler.js
│   │   └── chatSocket.js
│   └── app.js
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── public/
│   ├── uploads/
│   └── static/
├── tests/
│   ├── controllers/
│   ├── services/
│   └── routes/
├── .env.example
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Key Features Organization:

### **Controllers** (`src/controllers/`)
- Handle HTTP requests and responses
- Validate input data
- Call appropriate services
- Return formatted responses

### **Services** (`src/services/`)
- Business logic layer
- Database operations through Prisma
- External API integrations
- Data processing

### **Routes** (`src/routes/`)
- Define API endpoints
- Apply middleware
- Route to appropriate controllers

### **Middleware** (`src/middleware/`)
- Authentication & authorization
- Request validation
- Error handling
- Rate limiting

### **Utils** (`src/utils/`)
- Helper functions
- JWT utilities
- Password hashing
- Validation schemas

### **Socket** (`src/socket/`)
- Real-time chat functionality
- Socket.io event handlers
- Chat room management

### **Prisma** (`prisma/`)
- Database schema
- Migrations
- Seed data

## Architecture Benefits:
- **Separation of Concerns**: Each layer has a specific responsibility
- **Scalability**: Easy to add new features and endpoints
- **Maintainability**: Clean code organization
- **Testability**: Each component can be tested independently
- **Security**: Proper authentication and authorization layers