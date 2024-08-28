export const buildResolvers = (options) => ({
    extensions: ['.jsx', '.js'],
    modules: [options.paths.src, 'node_modules'],
    preferAbsolute: true,
})