module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/demo-admin/' : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost/ThinkPHP/public/index.php/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}