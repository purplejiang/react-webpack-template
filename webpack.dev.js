const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'heap-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), //网站的根目录
    host: '0.0.0.0',
    port: 8082, //端口
    // open: true, // 自动打开浏览器
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin() //当开启 HMR 的时候使用该插件会显示模块的相对路径
    // new webpack.HotModuleReplacementPlugin()
  ]
});
