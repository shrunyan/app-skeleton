module.exports = function (gulp, plugins) {
  return function () {
    gulp.src(gulp.opts.LESS)
      .pipe(plugins.plumber())
      .pipe(plugins.less())
      .pipe(plugins.minifyCss({
        compatibility: 'ie8'
      }))
      .pipe(plugins.concat('main.min.css'))
      .pipe(gulp.dest(gulp.opts.DEST))
  }
}
