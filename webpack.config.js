module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }
    ]
  }
}
