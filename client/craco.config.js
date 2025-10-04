const path = require('path');

module.exports = {
  webpack: {
    alias: {
      'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react/dist/esm/lucide-react.mjs'),
    },
  },
};
