const path = require('path');

module.exports = {
  entry: "./frontend/pebbble.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: 'bundle.js'
  },
  devtool: 'source-map', // so you can see the original files when debugging
  resolve: {
    extensions: ['.js', ".jsx", '*']
  },
  module: {
    rules: [
      {
        test: /.\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'] // which presets to run
          }
        },
      }
    ]
  }
}