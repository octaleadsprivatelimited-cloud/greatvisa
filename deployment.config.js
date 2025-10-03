// Deployment Configuration
module.exports = {
  development: {
    NODE_ENV: 'development',
    PORT: 3001,
    CORS_ORIGINS: ['http://localhost:3000', 'http://localhost:3001']
  },
  production: {
    NODE_ENV: 'production',
    PORT: process.env.PORT || 3001,
    CORS_ORIGINS: [
      'https://yourdomain.com',
      'https://www.yourdomain.com'
    ]
  },
  staging: {
    NODE_ENV: 'staging',
    PORT: process.env.PORT || 3001,
    CORS_ORIGINS: [
      'https://staging.yourdomain.com'
    ]
  }
};
