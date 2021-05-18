module.exports = {
  plugins: [
    require('postcss-nesting'),
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-fail-on-warn'),
  ],
};
