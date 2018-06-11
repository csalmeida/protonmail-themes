require('dotenv').config()
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const setThemeName = (extension = ".css") => {
  return process.env.THEME_NAME + extension
};

const templatePath = path.join(__dirname, process.env.TEMPLATE_PATH, `theme_template.scss`);
const themeName = setThemeName();

console.log("Theme name: ", themeName);

module.exports = {
  mode: process.env.MODE,
  entry: templatePath,
  output: {
    filename: "main.js",
    path: path.join(__dirname, 'themes')
  },
  module: {
  // Add loader
  rules: [{
      test: /\.(scss)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: themeName,
    })
  ],
};
