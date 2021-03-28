const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    port: 3000,
    open:true,
  },
   plugins: [
   	new HtmlWebpackPlugin({ template: './src/index.html' })
   ],
   module: {
     rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
   		{
   			test: /\.css$/,
   			use: ['style-loader', 'css-loader']
   		}
   	]
   }
};