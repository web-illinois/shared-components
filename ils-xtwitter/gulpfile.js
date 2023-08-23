var gulp = require('gulp');
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');

gulp.task("styles", function () {
    return gulp.src(['ils-xtwitter/xtwitter.css'])
        .pipe(cssmin())
        .pipe(concat("xtwitter.min.css"))
        .pipe(gulp.dest("ils-xtwitter/"));
});

gulp.task("ils-xtwitter", gulp.series("styles"));