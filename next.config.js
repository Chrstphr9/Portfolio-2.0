// next.config.js
module.exports = {
    distDir: 'dist',
    webpack: (config) => {
      config.module.rules.push({
        test: /\.pdf$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'static/pdf/', // Where you want to store the PDF files
              publicPath: '/_next/static/pdf/', // Path for accessing the PDF in the app
            },
          },
        ],
      });
  
      return config;
    },
  };
  