const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let AnalysisConfig = require("./webpack.config.dev");

// BundleAnalyzerPlugin can't be used in watch mode due to socket.io problems (webpack tries to recompile socket.io forever).

AnalysisConfig["plugins"].push(new BundleAnalyzerPlugin({
    analyzerMode: "static",
    openAnalyzer: true,
    reportFilename: 'analyzer/report.html',
}));

module.exports = AnalysisConfig;
