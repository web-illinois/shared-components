var gulp = require('gulp');
var concat = require("gulp-concat");
var cssmin = require('gulp-cssmin');

gulp.task("styles", function () {
    return gulp.src(['ils-threads/threads.css'])
        .pipe(cssmin())
        .pipe(concat("threads.min.css"))
        .pipe(gulp.dest("ils-threads/"));
});

gulp.task("ils-threads", gulp.series("styles"));