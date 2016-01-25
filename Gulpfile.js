var gulp = require('gulp');
var sass = require('gulp-sass');

var sass_input = 'sass/**/*.scss'; //where we get out .scss files
var sass_output = './css/'; //where we dump our .css files

//compile into .css
gulp.task('sass', function() {
    gulp.src(sass_input)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(sass_output));
});

//compile into compressed .css
gulp.task('sass.min', function () {
   gulp.src(sass_input)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(sass_output)) 
});

//Watch task
gulp.task('sass:watch',function() {
    gulp.watch('sass/**/*.scss',['sass.min']);
});