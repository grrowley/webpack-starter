const path = require('path')
const conf = require('./_bluemodus.js');

module.exports = {
  mode    : 'development',
  entry   : '.' + path.sep + conf.frontend + path.sep + 'bundle.js',
  output  : {
    path  : path.join(__dirname, conf.production)
  },
  module  : {
    rules : [
      // static file handler (images and fonts)
      {
        test : /\.(bmp|gif|jpeg|jpg|png|webp|eot|svg|ttf|woff|woff2)$/,
        use  : [
          {
            loader  : 'file-loader',
            options : {
              name    : '[path][name].[ext]',
              context : conf.frontend
            }
          }
        ]
      },
      // pug file handler
      {
        test : /\.(pug|jade)$/,
        use  : [
          {
            loader  : 'file-loader',
            options : {
              name : '[name]' +  conf.pug.ext,
            }
          },
          {
            loader  : 'pug-html-loader',
            options : conf.pug.options
          }
        ]
      },
      // scss file handler
      {
        test : /\.(scss|sass)$/,
        use  : [
          {
            loader  : 'file-loader',
            options : {
              name       : '[path][name].css',
              context    : conf.frontend + path.sep + conf.sass.output + path.sep + 'scss' + path.sep,
              outputPath : conf.sass.output
            }
          },
          {
            loader  : 'sass-loader',
            options : conf.sass.options
          }
        ]
      }
    ]
  }
}