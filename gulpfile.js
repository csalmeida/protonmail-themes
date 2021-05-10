const gulp = require('gulp')
const { sass } = require("@mr-hope/gulp-sass");


const themesPath = './templates/*/*.scss'
const ignoredFiles = ['!./templates/theme_example/*.scss']


/*
  Compiles SCSS themes into CSS
*/
gulp.task('styles', () => {
  return gulp.src([themesPath, ...ignoredFiles])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('themes'))
})

/* Lists tasks to be used by watch and build commands. */
const series = [
  'styles'
]

/* Registers changes in scrips and sass files. */
gulp.task('watch', () => {
  gulp.watch([themesPath, ...ignoredFiles], gulp.series(series));
})

/* Compiles all files. */
gulp.task('build', gulp.series(series))
