var gulp = require('gulp');
var terser = require("gulp-terser");
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');

gulp.task("scripts", function () {
    return gulp.src(['ils-status/status.js'])
        .pipe(terser())
        .pipe(concat("status.min.js"))
        .pipe(gulp.dest("ils-status/"));
});

gulp.task("styles", function () {
    return gulp.src(['ils-status/status.css'])
        .pipe(cssmin())
        .pipe(concat("status.min.css"))
        .pipe(gulp.dest("ils-status/"));
});

gulp.task("ils-status", gulp.series("scripts", "styles"));