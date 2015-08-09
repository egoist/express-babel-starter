var gulp = require('gulp'),
  babel = require('gulp-babel')

var paths = {
  system: './src/system/*.js'
}

gulp.task('babel', function() {
  return gulp.src(paths.system)
    .pipe(babel())
    .pipe(gulp.dest('./core'))
})