const path = require('path')

module.exports = {
  'entry': './src/index.js',
  'mode': 'development',
  'output': {
    'filename': 'bundle.js',
    'path': path.resolve('dist'),
    'publicPath': '/',
  },
  'module': {
    'rules': [
      {
        'exclude': /node_modules/,
        'test': /\.(js|jsx)$/,
        'use': 'babel-loader',
      }
    ],
  },
}
