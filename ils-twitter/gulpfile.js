var gulp = require('gulp');
var terser = require("gulp-terser");
var concat = require("gulp-concat");

gulp.task("scripts", function () {
    return gulp.src(['ils-twitter/twitter.js'])
        .pipe(terser())
        .pipe(concat("twitter.min.js"))
        .pipe(gulp.dest("ils-twitter/"));
});

gulp.task("ils-twitter", gulp.series("scripts", "styles"));