# GREAT Visa Network - Setup Guide

## 🚀 Quick Start

### Step 1: Install Dependencies

1. **Install Backend Dependencies**
```bash
npm install
```

2. **Install Frontend Dependencies**
```bash
cd client
npm install
```

### Step 2: Run the Application

#### Option 1: Run Both Frontend and Backend Together (Recommended)
```bash
# From the root directory
npm run dev
```

#### Option 2: Run Separately

**Terminal 1 - Backend Server:**
```bash
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - React Frontend:**
```bash
cd client
npm start
# Frontend runs on http://localhost:3000
```

### Step 3: Access the Website

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📦 What's Included

### Pages (23 Total)

#### Main Pages (10)
- ✅ Home - Dynamic hero slider with contact form
- ✅ About Us - Company information and team
- ✅ Services - Comprehensive service listing
- ✅ Portfolio - Success stories and testimonials
- ✅ Blog - Immigration news and guides
- ✅ Contact - Contact form and information
- ✅ Pricing - Service pricing plans
- ✅ Testimonials - Client reviews
- ✅ FAQ - Frequently asked questions
- ✅ Careers - Job openings

#### Visa Services (5)
- ✅ Study Visa
- ✅ Work Visa
- ✅ Tourist Visa
- ✅ Family Visa
- ✅ Business Visa

#### Immigration Services (5)
- ✅ Immigration Consultation
- ✅ Job Placement
- ✅ Skill Assessment
- ✅ Document Attestation
- ✅ Visa Extension

#### Legal Pages (3)
- ✅ Privacy Policy
- ✅ Terms of Service
- ✅ Sitemap

### Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Dynamic Hero Slider** - Full-width image carousel with navigation
✅ **Contact Forms** - Integrated with backend API
✅ **Mobile Navigation** - Full-screen menu with Framer Motion animations
✅ **Mega Footer** - Comprehensive footer with mobile accordion
✅ **SEO Optimized** - sitemap.xml and robots.txt included
✅ **Social Media Integration** - All major platforms linked
✅ **Modern UI/UX** - Beautiful design with smooth animations

## 🎨 Customization Guide

### 1. Update Company Information

Edit the contact information in:
- `/client/src/components/Header.tsx` - Top bar phone/email
- `/client/src/components/Footer.tsx` - Footer contact details
- `/client/src/pages/Contact.tsx` - Contact page information

### 2. Update Images

Replace placeholder images with your own:
- Hero slider images in `/client/src/components/Hero.tsx`
- Service images in all service pages
- Team photos in `/client/src/pages/About.tsx`

### 3. Customize Colors

Edit the color scheme in:
- `/client/tailwind.config.js` - Primary and secondary colors
- Default primary color: Blue (#3b82f6)

### 4. Update Content

All page content can be edited in the respective files:
- `/client/src/pages/*.tsx` - All page components

## 🔧 Configuration

### Backend Configuration

Edit `/server.js` to configure:
- Port number (default: 5000)
- CORS settings
- API endpoints

### Email Integration

To enable email functionality:

1. Install nodemailer (already included)
2. Update the contact endpoint in `server.js`:

```javascript
// Add nodemailer configuration
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

// Update the contact endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message, service } = req.body;
  
  await transporter.sendMail({
    from: 'your-email@gmail.com',
    to: 'info@greatvisanetwork.com',
    subject: `New Contact Form Submission - ${service}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  });
  
  res.status(200).json({ success: true, message: 'Thank you for your inquiry!' });
});
```

## 📱 Social Media Setup

Update social media links in:
- `/client/src/components/Footer.tsx`
- `/client/src/pages/Contact.tsx`

Replace placeholder URLs with your actual social media profiles.

## 🌐 SEO Setup

### Sitemap
- File: `/client/public/sitemap.xml`
- Update the domain from `greatvisanetwork.com` to your actual domain

### Robots.txt
- File: `/client/public/robots.txt`
- Update the sitemap URL to match your domain

### Meta Tags
Add meta tags in `/client/public/index.html`:

```html
<head>
  <meta name="description" content="GREAT Visa Network - Professional visa consultancy and immigration services">
  <meta name="keywords" content="visa consultancy, immigration services, work visa, study visa">
  <meta property="og:title" content="GREAT Visa Network">
  <meta property="og:description" content="Professional visa consultancy and immigration services">
  <!-- Add more meta tags as needed -->
</head>
```

## 🚀 Deployment

### Build for Production

1. Build the React app:
```bash
cd client
npm run build
```

2. The build files will be in `/client/build`

3. Start the production server:
```bash
cd ..
npm start
```

### Deploy to Hosting

#### Option 1: Traditional Hosting (cPanel, VPS, etc.)
1. Upload all files to your server
2. Run `npm install` on the server
3. Build the React app: `cd client && npm run build`
4. Start the server: `npm start` or use PM2

#### Option 2: Vercel/Netlify (Frontend Only)
1. Build: `cd client && npm run build`
2. Deploy the `/client/build` folder

#### Option 3: Heroku (Full-stack)
1. Create a Heroku app
2. Push your code to Heroku
3. The Procfile is already configured
4. Heroku will automatically install dependencies and build

## 🐛 Troubleshooting

### Issue: Port Already in Use
```bash
# Kill the process using the port
# On Mac/Linux:
lsof -ti:5000 | xargs kill -9

# On Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Issue: Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

cd client
rm -rf node_modules package-lock.json
npm install
```

### Issue: React Not Starting
```bash
cd client
npm start
```

## 📊 Performance Optimization

1. **Image Optimization**: Replace placeholder images with optimized versions
2. **Code Splitting**: Already implemented with React Router
3. **Lazy Loading**: Implement lazy loading for images
4. **Caching**: Configure browser caching in production

## 🔐 Security

1. **Environment Variables**: Create `.env` file for sensitive data
2. **CORS**: Configure CORS in `server.js` for production
3. **Helmet**: Already configured for security headers
4. **Input Validation**: Add validation for form inputs

## 📞 Support & Contact

For any issues or questions:
- Email: support@greatvisanetwork.com
- Website: www.greatvisanetwork.com

---

## ✅ Checklist Before Launch

- [ ] Update all contact information
- [ ] Replace placeholder images with actual images
- [ ] Configure email functionality
- [ ] Update social media links
- [ ] Update domain in sitemap.xml and robots.txt
- [ ] Add meta tags for SEO
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Test all navigation links
- [ ] Configure Google Analytics (optional)
- [ ] Set up SSL certificate
- [ ] Create backup of the site

---

**Designed and Developed by Octaleads Pvt Ltd.**  
Website: https://www.octaleads.com/

© 2024 GREAT Visa Network. All rights reserved.
