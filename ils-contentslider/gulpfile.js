var gulp = require('gulp');
var terser = require("gulp-terser");
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');

gulp.task("scripts", function () {
    return gulp.src(['ils-contentslider/contentslider.js'])
        .pipe(terser())
        .pipe(concat("contentslider.min.js"))
        .pipe(gulp.dest("ils-contentslider/"));
});

gulp.task("styles", function () {
    return gulp.src(['ils-contentslider/contentslider.css'])
        .pipe(cssmin())
        .pipe(concat("contentslider.min.css"))
        .pipe(gulp.dest("ils-contentslider/"));
});

gulp.task("ils-contentslider", gulp.series("scripts", "styles"));