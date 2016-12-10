var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new NpmInstallPlugin()
	],
	module: {
		preLoaders: [ //добавили ESlint в preloaders
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "src"),
				],
			}
		],
    	loaders: [
			{
				loaders: ['babel-loader'],
				include: [
					path.resolve(__dirname, "src")
				],
				test: /\.js$/,
				plugins: ['transform-runtime']
			}
		]
	}
}