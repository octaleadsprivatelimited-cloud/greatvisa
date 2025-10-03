export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    platform: 'vercel'
  });
}

