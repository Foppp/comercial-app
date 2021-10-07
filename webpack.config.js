const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.js'
  },
  devServer: {
    port: 8080,
    static: {
      directory: './dist',
    },
  },
  plugins: [
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new Dotenv({
      path: path.resolve(__dirname,'.env')
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          // { loader: MiniCssExtractPlugin.loader },
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          },
          // { loader: 'postcss-loader' },
          // { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
};
