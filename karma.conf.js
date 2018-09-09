var webpackConfig = require("./webpack.config");
const entry = "src/index.spec.js"
module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [entry],
        exclude: [],
        preprocessors: {
            [entry]: ["webpack","sourcemap"]
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        reporters: ["progress","kjhtml"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["Chrome"],
        singleRun: false,
        concurrency: Infinity,
        client:{
            clearContext:false
        }
    });
};