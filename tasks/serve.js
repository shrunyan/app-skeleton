module.exports = function (gulp, plugins) {
  return function () {
    var port = gulp.opts.env == 'development' ? 8001 : 80
    plugins.connect.server({
      root: gulp.opts.DEST,
      port: port,
      livereload: true
    })
  }
}
