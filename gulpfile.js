const gulp = require('gulp');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const gutil = require('gulp-util');
const compiler = webpack(webpackConfig);

gulp.task('compile', () => {
  compiler.run((err, stats) => {
    if (err) throw new gutil.PluginError('compile', err);
      gutil.log('[compile]', stats.toString({
        colors: true,
      }));
  });
});

gulp.task('default', ['compile']);
