// helper function to quickly include files in our bundle
const requireAll = (r) => {r.keys().forEach(r)}

// place your required file patterns here
// -------------------------------------------------------------------------->>>

// images
requireAll(require.context(
  './img',                                      // directory
  true,                                         // include subdirectories
  /\.(bmp|gif|jpe?g|png|webp)$/i                // extension patterns
))

// fonts
requireAll(require.context(
  './fonts',                                    // directory
  true,                                         // include subdirectories
  /\.(eot|svg|ttf|woff|woff2)$/i                // extension patterns
))

// scripts
requireAll(require.context(
  './js',                                       // directory
  true,                                         // include subdirectories
  /\.(js)$/                                     // extension patterns
))

// templates
requireAll(require.context(
  './pug',                                      // directory
  false,                                        // include subdirectories
  /\.(pug|jade)$/                               // extension patterns
))

// styles
requireAll(require.context(
  './styles/scss',                               // directory
  false,                                         // include subdirectories
  /\.(scss|sass)$/                               // extension patterns
))

// -------------------------------------------------------------------------->>>