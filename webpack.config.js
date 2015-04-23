module.exports = {
  entry: './src/scripts/main',
  output: {
    path: __dirname + '/dist/scripts',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js(x?)$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime'}
    ]
  }
};
