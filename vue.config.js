const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: process.env.NODE_ENV === "production" ? "/blog_frontend/" : "/",
    devServer: {
        port: 8000
    }
})
