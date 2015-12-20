/* global require:true */

var gulp = require('gulp')
var plugins = require('gulp-load-plugins')()
var minimist = require('minimist')
var assign = require('lodash.assign')

var env = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
}
var argv = minimist(process.argv.slice(2), env)
var options = {
  DEST: 'public',
  APP_ENTRY: 'app/app.js',
  LESS: [
    'app/core/less/**/*.less',
    'app/less/**/*.less'
  ],
  VENDORS: [
    'app/vendors/highcharts/highcharts-standalone.4.1.7.js',
    'app/vendors/highcharts/highcharts.4.1.7.js',
    'app/vendors/highcharts/highcharts-theme.js'
  ]
}

function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins)
}

gulp.opts = assign(options, argv)

// Load Tasks
gulp.task('html', getTask('html'))
gulp.task('icons', getTask('icons'))
gulp.task('less', getTask('less'))
gulp.task('vendors', getTask('vendors'))
gulp.task('bundle', getTask('bundle'))
gulp.task('rebundle', getTask('rebundle'))
gulp.task('serve', getTask('serve'))

// Build Tasks
gulp.task('build', ['html', 'icons', 'less', 'vendors', 'bundle'])
gulp.task('watch', ['rebundle'], function () {
  gulp.watch(gulp.opts.LESS, ['less'])
})
gulp.task('dev', ['serve', 'build', 'watch'])
gulp.task('default', ['dev'])
