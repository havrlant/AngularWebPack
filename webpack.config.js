module.exports = {
    entry: "./src/index",
    output: {
        filename: "bundle.js"
    },
    resolve: {
    	extensions: [".ts", ".js", ""]
    },
    module: { 
    	loaders: [
      	{ test: /\.ts$/, loader: 'ts-loader' },
      	 { test: /\.css$/, loader: "style!css" }
      ]
  	},
  	devtool: 'source-map'
};