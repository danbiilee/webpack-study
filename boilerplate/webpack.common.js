const path = require('path');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{ test: /\.html$/, use: ['html-loader'] },
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
		alias: {
			'@components': path.resolve(__dirname + '/src/components'),
			'@images': path.resolve(__dirname + '/public/images'),
			'@fonts': path.resolve(__dirname + '/public/fonts'),
		},
	},
};
