var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('.'))
    .pipe(sync.stream());
});

gulp.task('serve', ['sass'], function() {
  sync.init({
    server: '.'
  });

  gulp.watch('*.scss', ['sass']);
  gulp.watch('*.html').on('change', sync.reload);
});

gulp.task('default', ['serve']);
