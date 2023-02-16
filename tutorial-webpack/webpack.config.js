const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /\.jpeg$/,
        type: "asset",
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            // change magic number (8kb)
            maxSize: 3 * 1024, // (to 3kb)
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
    ],
  },
};
