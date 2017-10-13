import secrets from './secrets.json';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  entry: {
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    // Global loader configuration
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      noInfo: true // set to false to see a list of every file being bundled.
    }),
    // generates external css file with hash in filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    // hash files using MD5 so the names change when content changes. creates variable chunkhash
    new WebpackMd5Hash(),
    // create separate bundle for vendor libraries so they're cached separately.
    // the value of name must match the property of entry
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // create html file that includes reference to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      // properties defined here are available in index.html in htmlWebpackPlugin.option.varName
      trackJSToken: secrets.trackJSToken
    }),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}
