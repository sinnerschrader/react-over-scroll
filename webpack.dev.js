const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const {HotModuleReplacementPlugin} = require("webpack");

module.exports = (env, argv) =>
	merge(common(env, argv), {
		devtool: "inline-source-map",
		devServer: {
			hot: true,
			inline: true
		},
		mode: "development",
		plugins: [new HotModuleReplacementPlugin()]
	});
