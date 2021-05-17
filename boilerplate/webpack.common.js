// loader: 자바스크립트가 아닌 파일도 웹팩이 번들링할 수 있도록

module.exports = {
  entry: './src/index.js', // 빌드할 기준 파일
  module: {
    rules: [
      { test: /\.html$/, use: ['html-loader'] },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          // 바벨로 하위 버전 호환되도록 변환 -> 패키지 폴더는 변환할 필요 없음
          loader: 'babel-loader',
        },
      },
    ],
  },
};
