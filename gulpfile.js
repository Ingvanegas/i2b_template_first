var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('js', function () {
    return gulp.src('js/script.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('js'))
});

gulp.task('css', function () {
    return gulp.src('css/style.css')
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});


gulp.task('default', ['js','css']);