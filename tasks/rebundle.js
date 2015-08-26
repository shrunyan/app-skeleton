/* global require */

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var watchify = require('watchify')

module.exports = function (gulp, plugins) {
  var browserify = require('./bundle')(gulp, plugins)()
  return function () {
    var w = watchify(browserify)

    // Watch and rebundle
    w.on('update', function () {
      w.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest(gulp.opts.DEST))
        .pipe(plugins.connect.reload());
    })
    w.on('log', function (msg) {
      console.log(msg)
    })

    return w
  }
}
