import {buildWebpack} from "./config/build/buildWebpack.js";
import {fileURLToPath} from 'url';
import path from 'path';

/*
 * No require, exports, module.exports, __filename, __dirname
 * These CommonJS variables are not available in ES modules.
 * require can be imported into an ES module using module.createRequire().
 * Equivalents of __filename and __dirname can be created inside each file via import.meta.url
 **/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env) => {
    const paths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.jsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const config = {
        mode: env.mode || 'development',
        port: env.port || 3000,
        paths,
        platform: env.platform || 'desktop'
    };

    return buildWebpack(config);
};
