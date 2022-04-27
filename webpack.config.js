const path = require('path')

module.exports = {
    entry:'./src/index.ts',
    module:{
        rules: [
            {
                test: /\.ts$/,
                use:'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            }
        ]
    },
    output:{
        publicPath: 'public',
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
      mode: 'development'
      
}