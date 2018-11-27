module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/brush-face-system/' : '/',
    // 跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.sanbotcloud.com',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}