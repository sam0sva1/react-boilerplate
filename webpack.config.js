var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new NpmInstallPlugin(),
		new CopyWebpackPlugin([
            { from: 'src/static' }
        ])
	],
	module: {
		preLoaders: [
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
					path.resolve(__dirname, "src"),
				],
				test: /\.js$/,
				plugins: ['transform-runtime'],
			},
			{
				test:   /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},
	postcss: function () {
		return [autoprefixer, precss];
	}

}