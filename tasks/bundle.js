/* global require */

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var browserify = require('browserify')
var watchify = require('watchify')
var riotify = require('riotify')
var babelify = require('babelify')

module.exports = function (gulp, plugins) {
  return function () {
    var b = browserify(watchify.args)
        b.external(gulp.opts.VENDORS)
        b.add(gulp.opts.APP_ENTRY)
        b.transform(babelify)
        b.transform(riotify)
        b.bundle()
          .pipe(source('bundle.js'))
          .pipe(buffer())
          .pipe(plugins.sourcemaps.init())
            .pipe(plugins.uglify())
          .pipe(plugins.sourcemaps.write('./maps'))
          .pipe(gulp.dest(gulp.opts.DEST))

    return b
  }
}
