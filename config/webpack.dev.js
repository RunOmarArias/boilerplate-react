const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/**@type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory:  path.join(__dirname, '../dist'),
          }
    },
    plugins: [
        new HotModuleReplacementPlugin(),
         new ReactRefreshWebpackPlugin()
    ],
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                use: ["style-loader", "css-loader"],
                test: /\.(css)$/
            }
        ]
    }
}

module.exports = merge(common, devConfig);
