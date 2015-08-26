// module.exports = function (gulp, plugins) {
//   return function () {
//     // body...
//   }
// }

module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('app/index.html')
      .pipe(gulp.dest(gulp.opts.DEST))
  }
}
