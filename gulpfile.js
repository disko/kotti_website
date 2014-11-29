var gulp = require('gulp');

// gulp plugins
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

dest = './kotti_website/static';
// Concat vendor libs to vendor-view.js and also create minified version
gulp.task('vendor-view', function() {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
    './bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js'
  ])
  .pipe(concat('view.js'))
  .pipe(gulp.dest(dest))
  .pipe(uglify())
  .pipe(rename('view.min.js'))
  .pipe(gulp.dest(dest));
});

// Concat vendor libs to vendor-edit.js and also create minified version
gulp.task('vendor-edit', function() {
  return gulp.src([
    './bower_components/angular/angular.js',
  ])
  .pipe(concat('edit.js'))
  .pipe(gulp.dest(dest))
  .pipe(uglify())
  .pipe(rename('edit.min.js'))
  .pipe(gulp.dest(dest));
});

gulp.task('vendor', ['vendor-view', 'vendor-edit']);

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(rename({extname: '.css'}))
    .pipe(gulp.dest(dest))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(dest));
  gulp.src('./bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('fonts'));
});

// Watch task
gulp.task('watch', function() {
  // autotrigger patient_app task on changes to .js files.
  // gulp.watch('./patient/**/*.js', ['patient_app']);
  gulp.watch('./scss/**/*.scss', ['sass']);
});

// Default task
gulp.task(
  'default', [
    'vendor',
    'sass',
    'watch'
  ]
);
