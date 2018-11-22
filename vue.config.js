module.exports = {
    baseUrl: process.env.NODE_ENV === 'production' ? '/face-recognition-admin/' : '/',
    // 跨域
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'http://localhost/ThinkPHP/public/index.php/api',
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
}