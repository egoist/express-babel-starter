var gulp = require('gulp'),
  babel = require('gulp-babel')

var paths = {
  server: './src/server/*.js'
}

gulp.task('babel', function() {
  return gulp.src(paths.server)
    .pipe(babel())
    .pipe(gulp.dest('./server'))
})