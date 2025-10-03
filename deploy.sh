#!/bin/bash

# Great Visa Network Deployment Script
echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing server dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install server dependencies"
    exit 1
fi

# Install client dependencies and build
echo "📦 Installing client dependencies..."
cd client
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install client dependencies"
    exit 1
fi

echo "🔨 Building React application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Failed to build React application"
    exit 1
fi

cd ..

echo "✅ Build completed successfully!"

# Check if build directory exists
if [ ! -d "client/build" ]; then
    echo "❌ Build directory not found. Build may have failed."
    exit 1
fi

echo "🎉 Deployment preparation completed!"
echo "📁 Build files are ready in client/build/"
echo "🚀 You can now start the server with: npm start"
echo ""
echo "For production deployment:"
echo "1. Set NODE_ENV=production"
echo "2. Update CORS_ORIGINS in server.js with your domain"
echo "3. Configure your web server (nginx/apache) to serve static files"
echo "4. Set up SSL certificates"
echo "5. Configure environment variables"
