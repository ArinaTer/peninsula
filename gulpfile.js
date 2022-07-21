const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const styles = require('./gulp/styles');

gulp.task('styles', styles(browserSync));

gulp.task('watch', function() {
    browserSync.init({
        server: {
           baseDir: "./",
        },
    });
    gulp.watch('./sass/**/*.sass', gulp.series('styles'));
    gulp.watch('*.html').on('change', browserSync.reload);
});
