var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload');

gulp.task('minify', function() {
    gulp.src('./libs/index.js')
    .pipe(uglify())
    .pipe(rename('index.min.js'))
    .pipe(gulp.dest('dest'));
});

gulp.task('default', function() {
    gulp.watch('./libs/index.js', ['minify']);
});

gulp.task('watchIndex', function() {
    gulp.watch('index.html', []);
});
