const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    //  屏蔽 SourceMap
    productionSourceMap: false,
    // publicPath: process.env.NODE_ENV === "production" ? "/blog_frontend/" : "/",
    devServer: {
        port: 8000
    }
})
