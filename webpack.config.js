// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode: 'development',
//     entry: {
//         index: './src/index.js'
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Output Management',
//             title: 'Development',
//         }),
//     ],
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//         clean: true,
//     },
// };

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};