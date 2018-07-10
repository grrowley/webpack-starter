// helper function to quickly include files in our bundle
const requireAll = (r) => {r.keys().forEach(r)}

// place your required file patterns below here
// ------------------------------------------------------------------>>>

// fonts
requireAll(require.context(
  './fonts',                                    // directory
  true,                                         // include subdirectories
  /\.(eot|svg|ttf|woff|woff2)$/                 // allowed extensions
))

// images
requireAll(require.context(
  './img',                                      // directory
  true,                                         // include subdirectories
  /\.(bmp|gif|jpeg|jpg|png|webp)$/              // allowed extensions
))

// scripts
requireAll(require.context(
  './js',                                       // directory
  true,                                         // include subdirectories
  /\.(js)$/                                     // allowed extensions
))

// templates
requireAll(require.context(
  './pug',                                      // directory
  false,                                        // include subdirectories
  /\.(pug|jade)$/                               // allowed extensions
))

// styles
requireAll(require.context(
  './styles/scss',                              // directory
  false,                                        // include subdirectories
  /\.(scss)$/                                   // allowed extensions
))