# Great Visa Network - React & Node.js Application

A modern, full-stack web application for visa consultancy and recruitment services built with React, TypeScript, and Node.js.

## 🚀 Technology Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Axios** for API calls

### Backend
- **Node.js** with Express.js
- **CORS** for cross-origin requests
- **Helmet** for security headers
- **Compression** for response optimization
- **Nodemailer** for email functionality

### Deployment
- **Docker** containerization
- **Nginx** reverse proxy
- **PM2** process management (optional)
- **CI/CD** ready

## 📁 Project Structure

```
Great Visa Network/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main app component
│   ├── public/            # Static assets
│   └── build/             # Production build
├── server.js              # Express server
├── package.json           # Root dependencies
├── Dockerfile             # Container configuration
├── docker-compose.yml     # Multi-container setup
├── nginx.conf             # Nginx configuration
└── deploy.sh              # Deployment script
```

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm 8+

### Installation

1. **Install dependencies:**
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

3. **Start development server:**
```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run server    # Backend only
npm run client   # Frontend only
```

4. **Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## 🚀 Production Deployment

### Quick Deployment
```bash
# Run the deployment script
./deploy.sh

# Start production server
npm start
```

### Docker Deployment
```bash
# Build and run with Docker
docker build -t great-visa-network .
docker run -p 3001:3001 great-visa-network

# Or use Docker Compose
docker-compose up -d
```

### Cloud Deployment

#### Heroku
```bash
heroku create your-app-name
# Deploy your application files to Heroku
```

#### Vercel
Frontend (CRA) + Serverless API on Vercel:

1) APIs available at `/api/*` via files in `api/` (added: `health.js`, `contact.js`, `newsletter.js`).
2) Deploy:
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
- Set build command: `cd client && npm ci && npm run build`
- Set publish directory: `client/build`
- Node version: `20`
- SPA routing: `_redirects` file added for client-side routes

## 🔧 Configuration

### Environment Variables
Create a `.env` file:
```env
NODE_ENV=production
PORT=3001
CORS_ORIGINS=https://yourdomain.com
```

### Domain Setup
Update CORS origins in `server.js`:
```javascript
const corsOptions = {
  origin: NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000']
};
```

## 📊 Features

### Frontend Features
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized
- ✅ Fast loading with code splitting
- ✅ TypeScript for type safety

### Backend Features
- ✅ RESTful API endpoints
- ✅ Input validation
- ✅ Error handling
- ✅ Security headers
- ✅ Compression
- ✅ Health checks
- ✅ Graceful shutdown

### Deployment Features
- ✅ Docker containerization
- ✅ Nginx reverse proxy
- ✅ SSL/TLS support
- ✅ Rate limiting
- ✅ Caching
- ✅ Health monitoring

## 🛡️ Security

- **Helmet.js**: Security headers
- **CORS**: Cross-origin protection
- **Input Validation**: Form validation
- **Rate Limiting**: API protection
- **HTTPS**: SSL/TLS encryption
- **Content Security Policy**: XSS protection

## 📈 Performance

- **Gzip Compression**: Reduced file sizes
- **Static File Caching**: Faster loading
- **Code Splitting**: Optimized bundles
- **Image Optimization**: Compressed assets
- **CDN Ready**: Global distribution

## 🔍 API Endpoints

### Health Check
```
GET /api/health
```

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello",
  "service": "Visa Consultation"
}
```

### Newsletter
```
POST /api/newsletter
Content-Type: application/json

{
  "email": "user@example.com"
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
cd client && npm run test:coverage

# Type checking
cd client && npm run type-check

# Linting
cd client && npm run lint
```

## 📝 Scripts

### Root Level
- `npm start` - Start production server
- `npm run dev` - Start development mode
- `npm run build` - Build React app
- `npm run deploy` - Full deployment

### Client Level
- `npm start` - Start React dev server
- `npm run build` - Build for production
- `npm run build:prod` - Production build (no source maps)
- `npm test` - Run tests
- `npm run lint` - Lint code

## 🐳 Docker Commands

```bash
# Build image
docker build -t great-visa-network .

# Run container
docker run -p 3001:3001 great-visa-network

# Docker Compose
docker-compose up -d
docker-compose logs -f
docker-compose down
```

## 🔄 CI/CD

The project is ready for CI/CD with:
- Jenkins
- Azure DevOps
- Custom deployment scripts

## 📞 Support

For issues and questions:
1. Check the logs: `npm start`
2. Test health endpoint: `GET /api/health`
3. Verify environment variables
4. Check Docker logs: `docker-compose logs`

## 🎯 Next Steps

1. **Database Integration**: Add MongoDB/PostgreSQL
2. **Authentication**: Implement user authentication
3. **Email Service**: Configure SMTP for contact forms
4. **Analytics**: Add Google Analytics
5. **Monitoring**: Set up application monitoring
6. **Testing**: Add comprehensive test suite

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ for Great Visa Network**