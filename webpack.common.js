import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
    entry: path.join(process.cwd(), 'src/app.js'),
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), 'index.html'),
            filename: 'index.html',
        }),
    ],
}
