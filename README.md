# 🍕 FoodHub - Complete Food Delivery Website

A modern, responsive food delivery website built with React, TypeScript, and Bootstrap. Features a complete ordering system, admin dashboard, dark mode, and much more!

## ✨ Features

### 🏠 **Core Pages**
- **Home Page** - Attractive hero banner, featured dishes, promotions
- **Menu Page** - Categories, search, filters, price ranges
- **Food Details** - High-resolution images, ingredients, nutrition info
- **Shopping Cart** - Add/remove items, quantity management
- **Checkout** - Secure payment forms, address validation
- **User Authentication** - Login/Signup with form validation

### 📱 **User Experience**
- **Responsive Design** - Optimized for desktop, tablet, mobile
- **Dark Mode Toggle** - System preference detection + manual toggle
- **Lazy Loading** - Optimized image loading for performance
- **Toast Notifications** - Real-time feedback for user actions
- **Smooth Animations** - CSS transitions and hover effects

### 🛠️ **Advanced Features**
- **Admin Dashboard** - Order management, menu editing, analytics
- **Reviews & Ratings** - Customer feedback system
- **WhatsApp Integration** - Quick contact and support
- **Google Maps** - Restaurant location integration
- **Newsletter Subscription** - Email marketing integration
- **SEO Optimization** - Meta tags, structured data, sitemap
- **Analytics Integration** - Google Analytics & Facebook Pixel ready

### 🔐 **Technical Features**
- **TypeScript** - Type-safe development
- **React Context** - State management for cart, auth, theme
- **Form Validation** - React Hook Form with Yup validation
- **Routing** - React Router with protected routes
- **Local Storage** - Persistent cart and user preferences

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open your browser**
Navigate to `http://localhost:5173`

## 📚 Usage Guide

### Demo Credentials
**Regular User:**
- Email: `user@example.com`
- Password: `password123`

**Admin User:**
- Email: `admin@example.com`
- Password: `password123`

### Navigation
- Browse the menu and add items to cart
- Use the search and filter functionality
- Toggle dark mode using the button in navbar
- Try the checkout process (demo mode)
- Access admin panel with admin credentials

## 🛡️ Features Breakdown

### 🏪 **Customer Features**
- Browse menu with categories and filters
- View detailed food information
- Add items to cart with quantity selection
- Secure checkout process
- Order tracking and confirmations
- User account management
- Write reviews and ratings

### 👨‍💼 **Admin Features**
- Dashboard with key metrics
- Order management (status updates)
- Menu item management (CRUD operations)
- User management
- Sales analytics
- Review moderation

## 🎨 Design System

### Colors
- Primary: `#ff6b35` (Orange)
- Success: `#28a745` (Green)
- Info: `#17a2b8` (Blue)
- Warning: `#ffc107` (Yellow)
- Danger: `#dc3545` (Red)

## 🔧 Configuration

### Analytics Setup
1. Replace `GA_TRACKING_ID` in `/src/components/Analytics/Analytics.tsx`
2. Replace `FB_PIXEL_ID` in the same file
3. Uncomment analytics initialization in `App.tsx`

### SEO Configuration
Update `/src/components/SEO/SEOHead.tsx` with:
- Your domain URL
- Business information
- Custom meta tags

## 📦 Build and Deploy

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Navbar, Footer
│   ├── SEO/           # SEO components
│   └── Analytics/      # Tracking components
├── contexts/           # React Context providers
├── data/              # Static data and mock data
├── pages/             # Page components
└── types/             # TypeScript type definitions
```

---

**Made with ❤️ for food lovers everywhere!**
