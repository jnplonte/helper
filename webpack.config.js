const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')

const JS_SOURCE_FILES = ['babel-polyfill', './index.js']
const OUTPUT_FILENAME = 'index'
const DEST_FOLDER = 'dist'
const COPYRIGHT = `jnplonte javascript helper`

const plugins = [
  new UglifyJSPlugin(), 
  new webpack.BannerPlugin(COPYRIGHT)
];
const outputfile = `${OUTPUT_FILENAME}.min.js`;
const mode = 'production';

module.exports = {
	mode,
	entry: JS_SOURCE_FILES,
	output: {
		path: path.join(__dirname, DEST_FOLDER),
		filename: outputfile,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			// Only run `.js` files through Babel
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	devtool: 'source-map',
	plugins: plugins
}