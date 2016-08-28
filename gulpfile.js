'use strict';
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');

gulp.task('eslint', [], () => {
  return gulp
    .src([
      'src/**/*.js',
      '!src/**/t*.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('concat', ['eslint'], function () {
  return gulp
    .src('src/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist'));
});
