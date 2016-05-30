var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/index",
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js", ""]
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'},
            {
                test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./dist/[name].css")
    ],
    devtool: 'source-map'
}
;