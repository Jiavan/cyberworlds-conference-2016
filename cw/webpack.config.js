var webpack = require('webpack'),
	commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	entry: {
		entry: './src/js/main.js'
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel-loader!jsx-loader?harmony'}
		]
	},
	//plugins: [commonsPlugin]
};