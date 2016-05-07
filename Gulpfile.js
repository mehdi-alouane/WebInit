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

// the default task
gulp.task('default', ['sass', 'watch', 'browser-sync']);