// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 변환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), 
    // filename: 'main.js',
    clean: true
  },

module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

	// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
      // 반환된 결과가 첫 번째 배열 데이터로 삽입
    }),
    new CopyPlugin ({
      patterns: [
        { from: 'static' }
        // 이미지와 파비콘이 포함된 static 폴더 지칭
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}