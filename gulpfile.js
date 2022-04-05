// each file in GulpTasks should contain a serial task that runs all tasks inside it
require('./ils-contentslider/gulpfile.js');

const gulp = require('gulp');

gulp.task('default', gulp.parallel('ils-contentslider'));