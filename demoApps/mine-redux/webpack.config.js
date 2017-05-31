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
  devServer: {
    // 配置监听端口, 因为8080很常用, 为了避免和其他程序冲突, 我们配个其他的端口号
    port: 8004,
    /*
    historyApiFallback用来配置页面的重定向

    SPA的入口是一个统一的html文件, 比如
    http://localhost:8010/foo
    我们要返回给它
    http://localhost:8010/index.html
    这个文件

    配置为true, 当访问的文件不存在时, 返回根目录下的index.html文件
    */
    historyApiFallback: true
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
