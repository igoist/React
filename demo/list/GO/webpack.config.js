const path = require('path')
const webpack = require('webpack')


const jsConfig = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'b.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('----igoist----')
  ]
}


module.exports = [
  jsConfig
]
