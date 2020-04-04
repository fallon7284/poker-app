const path = require("path");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/static"),
    // the name of the file that will contain our output
    // we could name this whatever we want, but bundle.js is convention
    filename: "bundle.js"
  },

  mode: "development",
  devtool: "source-map",

  // extra modules to incorporate when parsing files
  module: {
    rules: [
      {
        // which files to apply this loader to (end in `js` or `jsx`)
        test: /jsx?$/,

        // which folders to ignore / not apply this to
        exclude: /(node_modules)/,

        // which loader to use for this rule-set --> check out .babelrc for our specified rules
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
