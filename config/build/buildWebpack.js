import {buildPlugins} from "./buildPlugins.js";
import {buildLoaders} from "./buildLoaders.js";
import {buildDevServer} from "./builldDevServer.js";
import {buildResolvers} from "./buildResolvers.js";

export const buildWebpack = (options) => {
    const {paths} = options;
    const isDev = options.mode === 'development';

    return {
        mode: options.mode || 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].[contenthash].js"
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }
}