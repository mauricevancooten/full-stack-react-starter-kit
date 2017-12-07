const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/',
    filename: 'server.js'
  },
  target: 'node',
  module: {
    rules: [
       {
         test: /\.js?$/,
         exclude: /(node_modules)/,
         loader: 'babel-loader'
       }
    ]
  },
  externals: nodeExternals()
}
