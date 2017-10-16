const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	context: __dirname + '/frontend',

  	entry: {
  		home: './home',
  		about: './about'
  	},

	output: {
		filename: './public/[name].js'
	},

	watch: NODE_ENV == 'development',

	watchOptions: {
		aggregateTimeout: 100
	},

  	devtool: NODE_ENV == 'development1' ? 'eval' : false,

  	plugins: [
  	new webpack.NoEmitOnErrorsPlugin(),
  	new webpack.DefinePlugin({
    		NODE_ENV: JSON.stringify(NODE_ENV)
    	})
	],

	module: {rules: [{
		test: /\.js$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['env']
			}
		}
	}]},

	resolve: {
	    modules: ['node_modules'],
	    extensions: ['.js']
	},

	resolveLoader: {
	    modules: ['node_modules'],
	    extensions: ['.js', '.json'],
	    moduleExtensions: ['-loader', '*'],
	    mainFields: ['loader', 'main']
	}
};

// module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
//     compress: {
//         warnings: false,
//         unsafe: true,
//         drop_console: tru
// e    }
// }))