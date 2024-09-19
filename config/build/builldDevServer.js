export const buildDevServer = (options) => ({
	port: options.port || 3000,
	open: true,
	// Только для dev серверва, если раздавать ститику через nginx, то надл делать проксирование на index.html
	historyApiFallback: true, // Для SPA роутинга
	hot: true,
});
