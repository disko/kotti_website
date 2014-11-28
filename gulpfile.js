var gulp = require('gulp');

// gulp plugins
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Concat vondor libs to vendor.js and also create minified version
gulp.task('vendor', function() {
  return gulp.src([
    './bower_components/jquery/dist/jquery.js',
    './bower_components/angular/angular.js',
    // './bower_components/angular-route/angular-route.js',
    './bower_components/lodash/dist/lodash.js',
    './bower_components/restangular/dist/restangular.js',
    // './bower_components/bootstrap/dist/js/bootstrap.js',
    // './bower_components/angular-strap/dist/angular-strap.min.js',
    // './bower_components/angular-strap/dist/angular-strap.tpl.min.js',
    // './bower_components/angular-cookies/angular-cookies.js',
    // './bower_components/angular-mocks/angular-mocks.js',
    // './bower_components/angular-resource/angular-resource.js',
    // './bower_components/angular-sanitize/angular-sanitize.js',
    // './bower_components/angular-scenario/angular-scenario.js'
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js',
    './bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js',
    './bower_components/select2/select2.js',
    './bower_components/ng-sortable/dist/ng-sortable.js',
    './bower_components/angular-ui-select/dist/select.js'
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('js'))
  .pipe(uglify())
  .pipe(rename('vendor.min.js'))
  .pipe(gulp.dest('js'));
});

// Compile coffeescript
gulp.task('coffee', function() {
  // TODO...
});

gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(minifyCSS())
    .pipe(rename('mis.min.css'))
    .pipe(gulp.dest('./css'));
  gulp.src('./bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('fonts'));
  gulp.src([
    './bower_components/select2/select2.png',
    './bower_components/select2/select2-spinner.gif'
  ])
    .pipe(gulp.dest('css'));
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
