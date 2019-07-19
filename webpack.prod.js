const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  optimization: {
    minimizer: [
      //压缩js
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: {
          warnings: false,
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log']
        }
      }),
      //压缩css
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  performance: {
    hints: false
  }
});
