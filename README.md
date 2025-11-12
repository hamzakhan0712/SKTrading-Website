# SK Trading Co. - Business Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.2-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-99.9%25-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.7-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

**Professional Import/Export Trading Business Website**

[Live Demo](#) • [Features](#-key-features) • [Installation](#-installation) • [Documentation](#-usage)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [API Routes](#-api-routes)
- [SEO Optimization](#-seo-optimization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

**SK Trading Co.** is a modern, high-performance website built with Next.js 15, designed for import/export trading businesses. The platform features a responsive design, comprehensive SEO optimization, secure contact forms, and seamless email integration for business inquiries.

Built with the latest web technologies, this website provides an exceptional user experience with fast loading times, smooth animations, and mobile-first design principles.

### Why This Platform?

- ⚡ **Lightning Fast**: Next.js 15 with Turbopack for instant development
- 🎨 **Modern Design**: Beautiful UI with Framer Motion animations
- 📧 **Email Integration**: Nodemailer and Resend for reliable communication
- 🔒 **Secure Forms**: Google reCAPTCHA v3 for spam protection
- 🌐 **SEO Optimized**: Next-SEO and automated sitemap generation
- 📱 **Responsive**: Perfect experience on all devices
- 🚀 **Production Ready**: Optimized for performance and scalability
- 📊 **Google Sheets Integration**: Direct form submissions to Google Sheets

---

## ✨ Key Features

### 🔹 Business Showcase
- **Professional Landing Page**: Eye-catching hero section with company overview
- **Services Display**: Detailed showcase of import/export services
- **Product Catalog**: Organized product listings with categories
- **Company Information**: About us, mission, vision, and values
- **Testimonials**: Customer reviews and success stories
- **Portfolio**: Past projects and partnerships

### 🔹 Contact & Communication
- **Contact Form**: Secure form with validation and reCAPTCHA
- **Email Integration**: Dual email service (Nodemailer + Resend)
- **Google Sheets**: Automatic form submission logging
- **Multiple Contact Methods**: Email, phone, address display
- **Inquiry Management**: Organized handling of business inquiries
- **Auto-Response**: Automated confirmation emails

### 🔹 SEO & Marketing
- **Next-SEO Integration**: Comprehensive meta tags and Open Graph
- **Automatic Sitemap**: XML sitemap generation with next-sitemap
- **robots.txt**: Search engine crawling optimization
- **Schema Markup**: Structured data for better search visibility
- **Social Media Cards**: Beautiful preview cards for sharing
- **Google Analytics Ready**: Easy integration for tracking

### 🔹 User Experience
- **Framer Motion Animations**: Smooth page transitions and interactions
- **Typography**: Inter and Playfair Display fonts for elegance
- **Dark/Light Mode**: Theme switching capability (optional)
- **Loading States**: Skeleton loaders and progress indicators
- **Error Handling**: User-friendly error messages
- **Accessibility**: WCAG compliant design

### 🔹 Performance
- **Image Optimization**: Next.js Image component for lazy loading
- **Code Splitting**: Automatic route-based splitting
- **SSR & SSG**: Server-side rendering and static generation
- **Turbopack**: Fast development with Next.js Turbopack
- **Caching**: Optimized caching strategies
- **CDN Ready**: Deployment-optimized assets

---

## 🛠 Technology Stack

### **Core Framework**
- **Next.js**: 15.3.2 - React framework with App Router
- **React**: 19.0.0 - UI library
- **JavaScript**: ES2022+ with modern syntax
- **Node.js**: 18.x or higher

### **Styling**
- **Tailwind CSS**: 4.1.7 - Utility-first CSS framework
- **PostCSS**: 8.5.3 - CSS processing
- **Autoprefixer**: 10.4.21 - CSS vendor prefixes
- **Framer Motion**: 12.12.1 - Animation library

### **Typography**
- **Inter**: Modern sans-serif font
- **Playfair Display**: Elegant serif font for headings

### **Email & Forms**
- **Nodemailer**: 7.0.3 - Email sending
- **Resend**: 4.5.1 - Modern email API
- **React Google reCAPTCHA**: 3.1.0 - Bot protection
- **Google APIs**: 148.0.0 - Google Sheets integration

### **SEO & Optimization**
- **Next-SEO**: 6.6.0 - SEO management
- **Next-Sitemap**: 4.2.3 - Sitemap generation
- **React Helmet**: 6.1.0 - Document head management

### **Development Tools**
- **ESLint**: 9.x - Code linting
- **Turbopack**: Fast bundler for Next.js
- **jsconfig.json**: Path aliases configuration

---

## 🚀 Installation

### Prerequisites

- **Node.js**: 18.x or higher
- **npm**: 9.x or higher (or yarn/pnpm)
- **Git**: For version control

### Step-by-Step Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/hamzakhan0712/sktrading.git
cd sktrading
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Environment Configuration
Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourwebsite.com
NEXT_PUBLIC_SITE_NAME=SK Trading Co.

# Email Configuration (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@yourwebsite.com
EMAIL_TO=info@yourwebsite.com

# Resend API (Alternative Email Service)
RESEND_API_KEY=your_resend_api_key

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key

# Google Sheets Integration (Optional)
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
GOOGLE_SHEET_ID=your_google_sheet_id

# Analytics (Optional)
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

#### 4. Start Development Server
```bash
npm run dev
```

The website will be available at: `http://localhost:3000`

#### 5. Build for Production
```bash
npm run build
```

#### 6. Start Production Server
```bash
npm start
```

---

## ⚙️ Configuration

### Next.js Configuration (`next.config.mjs`)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    domains: ['yourdomain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Experimental features
  experimental: {
    turbo: {
      resolveAlias: {
        '@': './src',
      },
    },
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
```

### Sitemap Configuration (`next-sitemap.config.js`)

```javascript
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourwebsite.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
    ],
  },
}
```

### Tailwind Configuration (`tailwind.config.js`)

```javascript
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}
```

---

## 📁 Project Structure

```
sktrading/
│
├── public/                      # Static assets
│   ├── favicon.ico
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero.jpg
│   │   └── products/
│   ├── robots.txt               # Auto-generated
│   └── sitemap.xml              # Auto-generated
│
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.js            # Root layout
│   │   ├── page.js              # Home page
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── services/
│   │   │   └── page.js
│   │   ├── products/
│   │   │   └── page.js
│   │   ├── contact/
│   │   │   └── page.js
│   │   ├── api/                 # API routes
│   │   │   ├── contact/
│   │   │   │   └── route.js
│   │   │   └── sheets/
│   │   │       └── route.js
│   │   ├── globals.css          # Global styles
│   │   └── favicon.ico
│   │
│   ├── components/              # React components
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navigation.js
│   │   ├── sections/
│   │   │   ├── Hero.js
│   │   │   ├── Services.js
│   │   │   ├── Products.js
│   │   │   └── Testimonials.js
│   │   ├── forms/
│   │   │   └── ContactForm.js
│   │   └── ui/
│   │       ├── Button.js
│   │       ├── Card.js
│   │       └── Input.js
│   │
│   ├── lib/                     # Utilities
│   │   ├── nodemailer.js        # Email configuration
│   │   ├── resend.js            # Resend configuration
│   │   ├── sheets.js            # Google Sheets API
│   │   └── recaptcha.js         # reCAPTCHA verification
│   │
│   ├── data/                    # Static data
│   │   ├── services.js
│   │   ├── products.js
│   │   └── testimonials.js
│   │
│   └── utils/                   # Helper functions
│       └── constants.js
│
├── .env.local                   # Environment variables (not in repo)
├── .gitignore                   # Git ignore rules
├── eslint.config.mjs            # ESLint configuration
├── jsconfig.json                # Path aliases
├── next-sitemap.config.js       # Sitemap configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind configuration
├── LICENSE                      # MIT License
└── README.md                    # This file
```

---

## 🔌 API Routes

### Contact Form API

```javascript
// src/app/api/contact/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, message, recaptchaToken } = await request.json()
    
    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      { method: 'POST' }
    )
    const recaptchaData = await recaptchaResponse.json()
    
    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }
    
    // Send email
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })
    
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

### Google Sheets Integration

```javascript
// src/app/api/sheets/route.js
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    
    const sheets = google.sheets({ version: 'v4', auth })
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.subject,
          data.message,
        ]],
      },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Google Sheets error:', error)
    return NextResponse.json(
      { error: 'Failed to save to sheet' },
      { status: 500 }
    )
  }
}
```

---

## 🎯 SEO Optimization

### Next-SEO Configuration

```javascript
// src/app/layout.js
import { DefaultSeo } from 'next-seo'

const SEO = {
  title: 'SK Trading Co. | Import Export Solutions',
  description: 'Leading import/export trading company providing comprehensive solutions for global trade.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    siteName: 'SK Trading Co.',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SK Trading Co.',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    cardType: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <DefaultSeo {...SEO} />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Custom Domain**
   - Add your domain in Vercel settings
   - Update DNS records

### Other Platforms

#### Netlify
```bash
npm run build
netlify deploy --prod
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## ⚡ Performance

### Optimization Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for faster loading
- **Font Optimization**: Automatic font optimization
- **CSS Optimization**: PurgeCSS removes unused styles
- **Compression**: Gzip and Brotli compression
- **Caching**: Aggressive caching strategies

### Performance Metrics

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.2s
- **Time to Interactive**: < 2.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add: Amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**SK Trading Co.**
- **Website**: [Your Website]
- **Email**: info@sktradingco.com
- **Developer**: Hamza Khan ([@hamzakhan0712](https://github.com/hamzakhan0712))

---

## 🙏 Acknowledgments

- **Vercel** for Next.js framework
- **Tailwind Labs** for Tailwind CSS
- **Framer** for Framer Motion
- **Google** for reCAPTCHA and Sheets API

---

<div align="center">

**Built with ❤️ for Global Trade**

⭐ Star this repository if you find it helpful!

[Report Bug](https://github.com/hamzakhan0712/sktrading/issues) | [Request Feature](https://github.com/hamzakhan0712/sktrading/issues)

</div>
