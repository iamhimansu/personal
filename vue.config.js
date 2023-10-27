const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    runtimeCompiler: true,
    productionSourceMap: false,
    outputDir: 'deploy',
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://iamhimanshu.github.io/personal'
        : '',
    configureWebpack: {
        resolve: {
            fallback: {
                path: require.resolve('path-browserify'),
                fs: false, // or require.resolve('fs'),
                crypto: false,
                util: require.resolve("util"),
                os: require.resolve("os-browserify/browser"),
                url: require.resolve("url")
            },

        },
    },
})
