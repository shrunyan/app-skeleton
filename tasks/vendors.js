module.exports = function (gulp, plugins) {
  return function () {
    gulp.src(gulp.opts.VENDORS)
      .pipe(plugins.concat('vendors.js'))
      .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('./maps'))
      .pipe(gulp.dest(gulp.opts.DEST))
  }
}
