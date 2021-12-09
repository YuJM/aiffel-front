const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@model': path.resolve(__dirname, 'src/model'),
      '@util': path.resolve(__dirname, 'src/util'),
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
