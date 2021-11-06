const path = require('path')
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 4000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, 'src/client/'),
    },
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8888',
      '/send': 'http://localhost:8888',
    },
  },
  devtool: 'source-map',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPattern: ['./dist/*'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png',
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
    }),
  ],
}
