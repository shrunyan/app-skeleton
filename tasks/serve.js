module.exports = function (gulp, plugins) {
  return function () {
    plugins.connect.server({
      root: gulp.opts.DEST,
      port: 8001,
      livereload: true
    })
  }
}
