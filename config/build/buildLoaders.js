import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options) => {
	const isDev = options.mode === 'development';

	const assetLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		type: 'asset/resource',
	};

	const svgrLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
				},
			},
		],
	};

	const stylesWithModules = {
		loader: 'css-loader',
		options: {
			modules: {
				localIdentName: isDev
					? '[path][name]__[local]--[hash:base64:5]'
					: '[hash:base64:8]',
				namedExport: false, // Для того, чтобы указывать `import cls`, а не `import * as cls`
			},
		},
	};

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			stylesWithModules,
			'sass-loader',
		],
	};

	const babelLoader = {
		test: /.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env',
					['@babel/preset-react', { runtime: 'automatic' }],
				],
				plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
			},
		},
	};

	return [assetLoader, styleLoader, babelLoader, svgrLoader];
};
