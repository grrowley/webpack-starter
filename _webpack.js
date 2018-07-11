const path = require('path')
const ccat = require('webpack-concat-plugin')
const sync = require('browser-sync-webpack-plugin')
const conf = require('./_config.js')

// modify script paths
if (conf.script.concat.length) {
  conf.script.concat.forEach((script, idx) => {
    conf.script.concat[idx] = './' + conf.frontend + '/js/' + script
  })
}

// webpack configuration
module.exports = {
  entry: './' + conf.frontend + '/bundle.js',
  stats: 'minimal',
  output: {
    path: path.join(__dirname, conf.frontend),
    filename: '_bundle.js'
  },
  module: {
    rules: [
      // image file handler
      {
        test: conf.img.pattern,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: conf.frontend
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              
            }
          }
        ]
      },
      // font file handler
      {
        test: conf.font.pattern,
        use: [
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
        test: conf.pug.pattern,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].html',
              outputPath: conf.pug.output
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: conf.pug.pretty
            }
          }
        ]
      },
      // scss file handler
      {
        test: conf.sass.pattern,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: conf.sass.name + '.css',
              outputPath: conf.sass.output
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: conf.sass.outputStyle
            }
          }
        ]
      },
      {
        test: conf.script.pattern,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new ccat({
      name: conf.script.name,
      uglify: conf.script.uglify,
      outputPath: conf.script.output,
      filesToConcat: conf.script.concat
    }),
    new sync({
      host: conf.development.host,
      port: conf.development.port,
      ui: {
        port: (conf.development.port + 1)
      },
      server: {
        baseDir: [path.join(__dirname, conf.frontend)]
      }
    })
  ]
}