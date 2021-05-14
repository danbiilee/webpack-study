module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 4000,
            outputPath: 'imgs',
            name() {
              if (process.env.NODE_ENV === 'development') {
                return '[name].[ext]';
              }
              return '[name].[contenthash].[ext]';
            },
          },
        },
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
