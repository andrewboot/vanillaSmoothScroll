const path =  require('path');

module.exports = {
  entry: './src/example.js',
  output: {
    path: `${__dirname}/example/js/`,
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: `${__dirname}/src/`,
        loader: 'babel'
      }
    ]
  }
}
