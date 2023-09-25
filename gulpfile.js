const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function styles() {
    return gulp.src('src/styles/style.sass')
        .pipe(sass())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/css'));
}

function scripts() {
    return gulp.src('src/js/script.js')
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

const build = gulp.parallel(styles, scripts);

exports.styles = styles;
exports.scripts = scripts;
exports.default = build;
