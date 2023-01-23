// each file in GulpTasks should contain a serial task that runs all tasks inside it
require('./ils-contentslider/gulpfile.js');
require('./ils-twitter/gulpfile.js');
require('./ils-google-analytics/gulpfile.js');
require('./ils-input/gulpfile.js');

const gulp = require('gulp');

gulp.task('default', gulp.parallel('ils-contentslider', 'ils-twitter', 'ils-google-analytics', 'ils-input'));