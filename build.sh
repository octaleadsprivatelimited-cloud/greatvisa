#!/bin/bash

# Build script for Vercel deployment
set -e

echo "🚀 Starting build process..."

# Navigate to client directory
cd client

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps

# Set environment variables
export GENERATE_SOURCEMAP=false
export DISABLE_ESLINT_PLUGIN=true

# Build the application
echo "🔨 Building React application..."
npm run build

echo "✅ Build completed successfully!"
