const path = require('path');

module.exports = {
  // mode: process.env.NODE_ENV || 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /assets/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
  },
};