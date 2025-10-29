# Viunex - Modern Company Website

A modern, SEO-optimized, fast-loading company website built with Next.js 14 and CSS Modules.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **SEO Optimized**: Meta tags, Open Graph, Schema markup, and dynamic OG images
- **Fast Performance**: Optimized images, lazy loading, and efficient code splitting
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Contact System**: MongoDB integration with email notifications
- **Newsletter**: Subscription system with database storage
- **Analytics**: Google Analytics and Facebook Pixel integration
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: CSS Modules
- **Animations**: Framer Motion
- **Database**: MongoDB
- **Email**: Nodemailer
- **Icons**: React Icons
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
app/
├── api/                    # API routes
│   ├── contact/           # Contact form handler
│   ├── newsletter/        # Newsletter subscription
│   └── og/               # Dynamic OG image generation
├── components/            # Reusable components
├── (pages)/              # Page components
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   └── services/
├── globals.css           # Global styles
└── layout.tsx           # Root layout

lib/
├── mongodb.ts           # Database connection
└── email.ts            # Email utilities
```

## 🔧 Setup Instructions

### 1. Clone and Install

```bash
git clone <repository-url>
cd viunex-website
npm install
```

### 2. Environment Variables

Create a `.env.local` file:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/viunex

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@viunex.com
CONTACT_EMAIL=hello@viunex.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXX

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://viunex.com
```

### 3. Database Setup

Make sure MongoDB is running locally or use MongoDB Atlas:

```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/viunex
```

### 4. Email Configuration

For Gmail SMTP:
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `SMTP_PASS`

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

## 📧 Contact Form Features

- **Form Validation**: Client and server-side validation
- **Database Storage**: All submissions stored in MongoDB
- **Email Notifications**: Automatic email to admin
- **Auto-Reply**: Confirmation email to user
- **Spam Protection**: Rate limiting and validation
- **Error Handling**: User-friendly error messages

## 📊 Analytics Integration

### Google Analytics
1. Create GA4 property
2. Add tracking ID to `NEXT_PUBLIC_GA_ID`
3. Events are automatically tracked

### Facebook Pixel
1. Create Facebook Pixel
2. Add Pixel ID to `NEXT_PUBLIC_FB_PIXEL_ID`
3. Conversion events tracked on form submissions

## 🎨 Customization

### Colors
Update CSS variables in `globals.css`:

```css
:root {
  --primary-color: #1E40AF;
  --accent-color: #7C3AED;
  --background-start: #F8FAFC;
  --background-end: #FFFFFF;
}
```

### Content
- Update company information in page components
- Modify service offerings in `/services/page.tsx`
- Add blog posts to `/blog/page.tsx`
- Update project portfolio in `/projects/page.tsx`

### Images
- Replace placeholder images with your own
- Update image URLs in components
- Optimize images for web (WebP format recommended)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

## 📈 Performance Optimization

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: CSS Modules for efficient styling
- **Font Optimization**: Google Fonts with display swap
- **Caching**: Static generation where possible

## 🔒 Security Features

- **Input Validation**: Server-side validation for all forms
- **Rate Limiting**: Protection against spam submissions
- **CORS**: Proper cross-origin resource sharing
- **Environment Variables**: Sensitive data protection
- **Error Handling**: No sensitive information in error messages

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch Interactions**: Optimized for touch devices
- **Performance**: Fast loading on mobile networks
- **Accessibility**: WCAG compliant design

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Build for production
npm run build
```

## 📞 Support

For support and customization requests, contact the development team or create an issue in the repository.

## 📄 License

This project is proprietary software. All rights reserved.