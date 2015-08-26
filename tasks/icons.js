module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('app/less/core/icons/*')
      .pipe(gulp.dest(gulp.opts.DEST + '/icons'))
  }
}
