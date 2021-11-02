const path = require("path");
const DllPlugin = require("webpack").DllPlugin;

module.exports = {
  context: process.cwd(),
  resolve: {
    extensions: [".js", ".jsx", ".json", ".less", ".css"],
    modules: [path.join(__dirname, "../"), "node_modules"]
  },
  entry: {
    library: [
      "react",
      "react-dom",
      "react-redux",
      "react-router",
      "react-router-dom",
      "react-virtualized-auto-sizer",
      "react-window",
      "redux",
      "@mui/icons-material",
      "@mui/material",
      "@mui/styles",
      "@emotion/react",
      "@emotion/styled",
      "bootstrap"
    ]
  },
  output: {
    filename: "[name].dll.js",
    path: path.join(__dirname, "../public"),
    library: "[name]"
  },
  plugins: [
    new DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "../public/[name].json")
    })
  ]
};
