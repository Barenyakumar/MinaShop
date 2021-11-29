const path = require('path')

module.exports = {
  mode: 'none',
  entry: './assets/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),   //dirname as it needs absolute address
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  watch: true,
}