const gulp = require('gulp')
const sass = require('gulp-sass')
/*
  Compiles SCSS into CSS,
  minifies CSS.
*/

const themesPath = './templates/*/*.scss'
const ignoredFiles = '!./templates/theme_example/*.scss'

gulp.task('styles', () => {
  return gulp.src([themesPath, ignoredFiles])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('themes'))
})

/* Registers changes in scrips and sass files. */
gulp.task('watch', () => {
  gulp.watch([themesPath, ignoredFiles], gulp.series('styles'));
})

/* Compiles all files. */
gulp.task('build', gulp.series(['styles']))