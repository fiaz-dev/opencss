import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
    entry: './index.ts',
    output: {
        filename: 'opencss.min.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            /*remove the below for a full bundle in js without extracting css*/
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'opencss.min.css',
        }),
    ],
};
