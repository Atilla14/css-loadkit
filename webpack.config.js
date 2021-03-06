var poststylus = require('poststylus')
var path = require('path')

module.exports = {
  context: __dirname,
  entry: './public/js/App.jsx',
  output: {
    path: path.join(__dirname, './public/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.json', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.styl?$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  stylus: {
    use: [
      poststylus(['autoprefixer', 'rucksack-css']),
      require('nib')()
    ],
    preferPathResolver: true
  }
}
