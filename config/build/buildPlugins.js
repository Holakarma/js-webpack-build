import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const {DefinePlugin} = webpack;

export const buildPlugins = ({mode, paths, platform}) => {

    const isDev = mode === 'development';

    const plugins = [
        new HtmlWebpackPlugin({template: paths.html}),
        new DefinePlugin({__PLATFORM__: JSON.stringify(platform)}),
    ];


    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if (!isDev) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
            chunkFilename: "css/[name].[contenthash].css"
        }));
    }

    return plugins;
};