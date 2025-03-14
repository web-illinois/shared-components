var gulp = require('gulp');
var terser = require("gulp-terser");
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');

gulp.task("scripts", function () {
    return gulp.src(['ils-input/input.js'])
        .pipe(terser())
        .pipe(concat("input.min.js"))
        .pipe(gulp.dest("ils-input/"));
});

gulp.task("styles", function () {
    return gulp.src(['ils-input/input.css'])
        .pipe(cssmin())
        .pipe(concat("input.min.css"))
        .pipe(gulp.dest("ils-input/"));
});

gulp.task("scripts3", function () {
    return gulp.src(['ils-input/input3.js'])
        .pipe(terser())
        .pipe(concat("input3.min.js"))
        .pipe(gulp.dest("ils-input/"));
});

gulp.task("styles3", function () {
    return gulp.src(['ils-input/input3.css'])
        .pipe(cssmin())
        .pipe(concat("input3.min.css"))
        .pipe(gulp.dest("ils-input/"));
});


gulp.task("ils-input", gulp.series("scripts", "styles", "scripts3", "styles3"));