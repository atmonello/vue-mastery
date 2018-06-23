// Gulp vars required for each task
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');
var runSequence = require('run-sequence');

// Compiles SASS into CSS
gulp.task('sass', function(){
    return gulp.src('src/assets/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// Minifies images
// gulp.task('images', function(){
//     return gulp.src('src/assets/img/**/*.+(png|jpg|jpeg|gif|svg)')
//     .pipe(cache(imagemin({
//         interlaced: true
//     })))
//     .pipe(gulp.dest('src/img/min'))
// });

// Runs BrowserSync
gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
});

// Watches files
gulp.task('watch', ['browserSync', 'sass'], function(){
    gulp.watch('src/**/*.sass', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/**/*.js', browserSync.reload);
});

// Default task to run all other images
gulp.task('default', function(callback){
    runSequence(['sass', 'browserSync', 'watch'],
    callback )
});


