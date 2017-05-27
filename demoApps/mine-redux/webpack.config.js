var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js', // 入口文件，单入口 app.jsx 文件
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }, // 编译到的文件
  module: {
    loaders: [ // 使用特定的加载器 loader 处理特定的文件
      {
        test: /.js?$/, // 文件过滤规则
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
        }
      }
    ]
  },
};

// module.exports = {
//   rules: [
//     {
//       test: /\.js$/,
//       exclude: /(node_modules|bower_components)/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['env']
//         }
//       }
//     }
//   ],
//   entry: './index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
// };
