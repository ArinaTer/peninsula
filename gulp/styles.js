const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function styles(browserSync) {
    return function() {
      return src('./sass/**/*.sass')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
        }))
        .pipe(sourcemaps.write('.'))   
        .pipe(dest('./css'))
        .pipe(browserSync.stream())
    };
}

module.exports = styles;