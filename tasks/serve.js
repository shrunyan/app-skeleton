module.exports = function (gulp, plugins) {
  return function () {
    var host = gulp.opts.env == 'development' ? 'localhost' : '0.0.0.0'
    var port = gulp.opts.env == 'development' ? 8001 : 80
    plugins.connect.server({
      root: gulp.opts.DEST,
      host: host,
      port: port,
      livereload: true
    })
  }
}
