var gulp = require('gulp');
var	sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

// sass task
gulp.task('sass', function () {
  return sass('scss/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('css'));
});

//watch task
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['watch']);
});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

/*
//autoprefixer task
gulp.task('autoprefixer', function () {
    return gulp.src('css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/prefix'));
});
*/

// the default task
gulp.task('default', ['sass', 'watch', 'browser-sync']);