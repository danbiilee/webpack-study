const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename() {
      if (process.env.NODE_ENV === 'development') {
        return 'AAA[name].js';
      }
      return '[name].[contenthash].js';
    },
    path: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:3000',
    clean: true,
  },
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico)$/i,
        type: 'asset', // file-size 8k 이상이면 파일로, 아니면 data uri로
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 4000,
        //     outputPath: 'images',
        //     name() {
        //       if (process.env.NODE_ENV === 'development') {
        //         return 'AAA[name].[ext]';
        //       }
        //       return '[name].[contenthash].[ext]';
        //     },
        //     esModule: false,
        //   },
        // },
      },
    ],
  },
};
