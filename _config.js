module.exports = {
  frontend: 'front-end',
  production: 'dist',
  img: {
    pattern: /\.(bmp|gif|jpe?g|png|webp|svg)$/i
  },
  font: {
    pattern: /\.(eot|svg|ttf|woff|woff2)$/i
  },
  pug: {
    pretty: true,
    output: '',
    pattern: /\.(pug|jade)$/,
  },
  sass: {
    name: 'main.min',
    output: 'styles',
    outputStyle: 'compressed',
    pattern: /\.(scss|sass)$/,
  },
  script: {
    name: 'frontEnd.min',
    uglify: true,
    output: 'js',
    concat: [                                                                   // concatinate js file patterns relative to your scripts folder
      '*/polyfill.*.js',
      'vendor/jquery*.js',
      'vendor/*.js',
      'custom/*.js'
    ],
    pattern: /\.(js)$/
  },
  development: {
    host: 'localhost',                                                          // usually this is pretty good
    port: Math.floor(Math.random() * (49150 - 1024 + 1)) + 1024,                // chad's random port generator (ui will be +1)
  }
}