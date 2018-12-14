const
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	fs = require('fs'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	isProduction = process.env.NODE_ENV === 'production',
	path = require('path'),
	ProgressBarPlugin = require('progress-bar-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	webpack = require('webpack');

module.exports = {
	mode: isProduction ? 'production' : 'development',
	context: path.resolve(__dirname, '..'),
	devtool: isProduction ? false : 'cheap-module-eval-source-map',

	entry: {
		app: './src/index',
	},

	output: {
		// Use [chunkhash] in production for caching reasons. Use simple [name] in development for increase build speed
		filename: isProduction ? '[name]-[chunkhash].bundle.js' : '[name].bundle.js',

		path      : path.join(__dirname, '..', 'build'),
		pathinfo  : !isProduction,
		publicPath: '/',
	},

	devServer: {
		contentBase: './build',
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},

			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},

			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					}
				}
			},

			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'],
			},

			{
				test: /\.(png|jpg)$/,

				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images/',
						emitFile: false,
					},
				},
			},

			{
				test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: {
					loader: 'file-loader',
				},
			},
		],
	},

	optimization: {
		minimizer:	isProduction
			? [new UglifyJsPlugin()]
			: undefined,

		//runtimeChunk: true,

		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'all',
					name  : 'vendor',
					test  : /[\\/]node_modules[\\/]/,
				},

				default: false,
			},
		},
	},

	performance: {hints: false},

	plugins: [
		new CleanWebpackPlugin(['build'], {root:path.resolve(__dirname, '..')}),
		isProduction ? new ExtractTextPlugin({allChunks: true, filename: '[name]-[chunkhash].css'}) : null,

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),

		new webpack.DefinePlugin({
			__DEV__      : !isProduction,
			'process.env': {NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development')},
		}),

		!isProduction ? new ProgressBarPlugin({clear: false}) : null,
	].filter(i => Boolean(i)),

	resolve: {
		alias: {
			'Components': path.resolve(__dirname, '..', 'src/components'),
			'Ducks': path.resolve(__dirname, '..', 'src/ducks'),
			'Store': path.resolve(__dirname, '..', 'src/store'),
			'Reducers': path.resolve(__dirname, '..', 'src/reducers'),
			'Typedefs': path.resolve(__dirname, '..', 'src/typedefs'),
		},

		extensions: ['.ts', '.tsx', '.js', '.json'],

		modules: [
			path.resolve(__dirname, '..', 'src'),
			path.resolve(__dirname, '..', 'node_modules'),
		],
	},

	stats : {colors: true},
	target: 'web',
};