/* eslint-disable no-undef */
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/serviceWorker.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "serviceWorker.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
