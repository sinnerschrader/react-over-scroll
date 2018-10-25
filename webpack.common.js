const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const ROOT = __dirname;
const APP = path.resolve(ROOT, "demo");
const OUT_DIR = path.resolve(ROOT, "docs");

module.exports = (env, argv) => {
	return {
		entry: {
			main: path.resolve(APP, "index.tsx")
		},
		output: {
			path: OUT_DIR,
			filename: "[name].js",
			publicPath: "/",
			libraryTarget: "umd"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx"]
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: "babel-loader"
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					loader: "file-loader",
					options: {
						name: "assets/images/[sha512:hash:base64:7].[ext]"
					}
				},
				{
					test: /\.(woff2?|eot|ttf)$/,
					loader: "file-loader",
					options: {
						name: "assets/fonts/[sha512:hash:base64:7].[ext]"
					}
				}
			]
		},
		devServer: {
			contentBase: OUT_DIR,
			compress: false,
			historyApiFallback: true,
			hot: Boolean(argv.hot)
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "demo/index.html"),
				alwaysWriteToDisk: true,
				filename: "index.html"
			}),
			new HtmlWebpackHarddiskPlugin(),
			new FaviconsWebpackPlugin({
				logo: path.resolve(__dirname, "demo/favicon.png"),
				prefix: 'icons/',
				emitStats: false,
				statsFilename: 'iconstats-[hash].json',
				persistentCache: true,
				inject: true,
				background: 'white',
				title: 'over-scroll',
			})
		]
	};
};
