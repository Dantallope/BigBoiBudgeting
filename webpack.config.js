const path = require('path');

module.exports = {
  entry: './src/index.js', // path to your application's entry point
  output: {
    filename: 'bundle.js', // name of the output bundle
    path: path.resolve(__dirname, 'dist'), // path to the output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regex to match files to apply this rule to
        exclude: /node_modules/, // exclude files in node_modules directory
        use: 'babel-loader', // use Babel to transpile the code
      },
      {
        test: /\.css$/, // regex to match files to apply this rule to
        use: ['style-loader', 'css-loader'], // use style-loader and css-loader to handle CSS files
      },
      // additional rules for other file types (e.g. images, fonts)
    ],
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
    },
  },
  // additional configuration options
};




