const path = require('path');
const webpack = require("webpack");

const config = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/env",
            "@babel/preset-react"
          ],
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ]
      }
    ],
  },
  devServer: {
    contentBasePublicPath: '',
    publicPath: '/dist/',
    compress: true,
    port: 1234,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.mode = 'development';
  }

  if (argv.mode === 'production') {
    config.mode = 'production'
  }

  return config;

};