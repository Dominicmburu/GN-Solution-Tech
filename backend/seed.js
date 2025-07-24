const { PrismaClient } = require('@prisma/client');
const { hashPassword } = require('../src/utils/bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting database seed...');

  try {
    // Create Super Admin
    const superAdminPassword = await hashPassword('SuperAdmin123!');
    const superAdmin = await prisma.admin.upsert({
      where: { email: 'superadmin@example.com' },
      update: {},
      create: {
        email: 'superadmin@example.com',
        username: 'superadmin',
        password: superAdminPassword,
        firstName: 'Super',
        lastName: 'Admin',
        role: 'SUPER_ADMIN',
        isActive: true
      }
    });
    console.log('✅ Super Admin created:', superAdmin.email);

    // Create Regular Admin
    const adminPassword = await hashPassword('Admin123!');
    const admin = await prisma.admin.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        email: 'admin@example.com',
        username: 'admin',
        password: adminPassword,
        firstName: 'John',
        lastName: 'Admin',
        role: 'ADMIN',
        isActive: true
      }
    });
    console.log('✅ Regular Admin created:', admin.email);

    // Create Moderator
    const moderatorPassword = await hashPassword('Moderator123!');
    const moderator = await prisma.admin.upsert({
      where: { email: 'moderator@example.com' },
      update: {},
      create: {
        email: 'moderator@example.com',
        username: 'moderator',
        password: moderatorPassword,
        firstName: 'Jane',
        lastName: 'Moderator',
        role: 'MODERATOR',
        isActive: true
      }
    });
    console.log('✅ Moderator created:', moderator.email);

    // Create Default Chat Room
    const defaultRoom = await prisma.chatRoom.upsert({
      where: { name: 'General' },
      update: {},
      create: {
        name: 'General',
        description: 'General chat room for all conversations',
        isActive: true
      }
    });
    console.log('✅ Default chat room created:', defaultRoom.name);

    // Create Support Chat Room
    const supportRoom = await prisma.chatRoom.upsert({
      where: { name: 'Support' },
      update: {},
      create: {
        name: 'Support',
        description: 'Customer support chat room',
        isActive: true
      }
    });
    console.log('✅ Support chat room created:', supportRoom.name);

    // Create Sample Blog Posts
    const sampleBlog1 = await prisma.blog.upsert({
      where: { slug: 'welcome-to-our-blog' },
      update: {},
      create: {
        title: 'Welcome to Our Blog',
        slug: 'welcome-to-our-blog',
        content: `
          <h2>Welcome to Our Blog!</h2>
          <p>We're excited to share our thoughts, insights, and updates with you through this blog.</p>
          
          <h3>What You Can Expect</h3>
          <ul>
            <li>Regular updates about our products and services</li>
            <li>Industry insights and trends</li>
            <li>Tips and tutorials</li>
            <li>Behind-the-scenes content</li>
          </ul>
          
          <p>Stay tuned for more exciting content coming your way!</p>
        `,
        excerpt: 'Welcome to our blog! We\'re excited to share our thoughts, insights, and updates with you.',
        status: 'PUBLISHED',
        tags: ['welcome', 'announcement', 'blog'],
        metaTitle: 'Welcome to Our Blog',
        metaDescription: 'Welcome to our blog where we share insights, updates, and valuable content.',
        publishedAt: new Date(),
        authorId: superAdmin.id
      }
    });
    console.log('✅ Sample blog post created:', sampleBlog1.title);

    const sampleBlog2 = await prisma.blog.upsert({
      where: { slug: 'getting-started-guide' },
      update: {},
      create: {
        title: 'Getting Started Guide',
        slug: 'getting-started-guide',
        content: `
          <h2>Getting Started Guide</h2>
          <p>This comprehensive guide will help you get started with our platform.</p>
          
          <h3>Step 1: Create Your Account</h3>
          <p>The first step is to create your account by providing your basic information.</p>
          
          <h3>Step 2: Explore the Dashboard</h3>
          <p>Once logged in, take some time to explore the dashboard and familiarize yourself with the interface.</p>
          
          <h3>Step 3: Customize Your Settings</h3>
          <p>Configure your settings according to your preferences.</p>
          
          <h3>Need Help?</h3>
          <p>If you need assistance, don't hesitate to contact our support team.</p>
        `,
        excerpt: 'A comprehensive guide to help you get started with our platform.',
        status: 'PUBLISHED',
        tags: ['guide', 'tutorial', 'getting-started'],
        metaTitle: 'Getting Started Guide - Your First Steps',
        metaDescription: 'Learn how to get started with our platform in this comprehensive guide.',
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
        authorId: admin.id
      }
    });
    console.log('✅ Sample blog post created:', sampleBlog2.title);

    // Create Draft Blog Post
    const draftBlog = await prisma.blog.upsert({
      where: { slug: 'upcoming-features' },
      update: {},
      create: {
        title: 'Upcoming Features',
        slug: 'upcoming-features',
        content: `
          <h2>Exciting Features Coming Soon</h2>
          <p>We're working on some amazing new features that will enhance your experience.</p>
          
          <h3>Feature 1: Advanced Analytics</h3>
          <p>Get detailed insights into your data with our new analytics dashboard.</p>
          
          <h3>Feature 2: Mobile App</h3>
          <p>Access our platform on the go with our upcoming mobile application.</p>
          
          <p>Stay tuned for more updates!</p>
        `,
        excerpt: 'Get a sneak peek at the exciting features we\'re working on.',
        status: 'DRAFT',
        tags: ['features', 'updates', 'roadmap'],
        metaTitle: 'Upcoming Features - What\'s Next',
        metaDescription: 'Discover the exciting new features we\'re working on for you.',
        authorId: moderator.id
      }
    });
    console.log('✅ Draft blog post created:', draftBlog.title);

    // Create Sample Contact Form Submissions
    const contact1 = await prisma.contact.create({
      data: {
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        phone: '+1234567890',
        subject: 'Question about pricing',
        message: 'Hi, I would like to know more about your pricing plans and what features are included in each tier.',
        status: 'UNREAD'
      }
    });
    console.log('✅ Sample contact created:', contact1.email);

    const contact2 = await prisma.contact.create({
      data: {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@example.com',
        subject: 'Technical support needed',
        message: 'I\'m experiencing some issues with the login functionality. Could you please help me resolve this?',
        status: 'READ'
      }
    });
    console.log('✅ Sample contact created:', contact2.email);

    const contact3 = await prisma.contact.create({
      data: {
        firstName: 'Carol',
        lastName: 'Davis',
        email: 'carol.davis@example.com',
        phone: '+1987654321',
        subject: 'Feature request',
        message: 'I would love to see a dark mode option in your application. This would greatly improve the user experience.',
        status: 'REPLIED'
      }
    });
    console.log('✅ Sample contact created:', contact3.email);

    // Create Sample Chat Messages
    const welcomeMessage = await prisma.chatMessage.create({
      data: {
        content: 'Welcome to our chat support! How can we help you today?',
        roomId: defaultRoom.id,
        senderId: admin.id,
        messageType: 'SYSTEM'
      }
    });
    console.log('✅ Welcome chat message created');

    const supportMessage = await prisma.chatMessage.create({
      data: {
        content: 'This is the support chat room. Our team is here to help you with any questions or issues.',
        roomId: supportRoom.id,
        senderId: superAdmin.id,
        messageType: 'SYSTEM'
      }
    });
    console.log('✅ Support chat message created');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📝 Sample Accounts Created:');
    console.log('Super Admin: superadmin@example.com / SuperAdmin123!');
    console.log('Admin: admin@example.com / Admin123!');
    console.log('Moderator: moderator@example.com / Moderator123!');
    console.log('\n💡 You can now start the server and login with these credentials.');

  } catch (error) {
    console.error('❌ Error during database seeding:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });