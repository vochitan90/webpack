const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin"); // include in webpack 5 no need to install again
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // none, production
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    // clean: {
    //   dry: true, //which files it's going to remove instead of actually removing them
    //   keep: /\.css/,
    // },
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(), remove it on PROD
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new CleanWebpackPlugin({
      // cleanOnceBeforeBuildPatterns: [
      //   "**/*", //clean all the file base on the path in (output)
      //   path.join(process.cwd(), "build/**/*"), // clean all the file inside the build folder
      // ],
      // use default option is enough
    }),
    new HtmlWebpackPlugin({
      title: "hello world",
      template: "src/index.hbs",
      description: "some description with handlebars",
    }),
  ],
};
