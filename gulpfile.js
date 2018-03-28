var gulp = require('gulp')
var ejs = require('gulp-ejs')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var styleSets = require(`./config/presets/_${ process.env.SITE_ENV }.json`).styleSets

console.log('SITE ENV:', process.env.SITE_ENV)
console.log('styleSets:', JSON.stringify(styleSets))

gulp.task('default', ['ejsToScss', 'scssToCss'])

gulp.task('ejsToScss', function() {
  return gulp.src('./public/sass/base/_base.scss.ejs')
    .pipe(ejs({
      primaryColor: styleSets.primary,
      secondaryColor: styleSets.secondary
    }))
    .pipe(rename('_base.scss'))
    .pipe(gulp.dest('./public/sass/base'))
})

gulp.task('scssToCss', ['ejsToScss'], function() {
  gulp.src('./public/sass/style.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public/stylesheets'))
})

gulp.task('watch', function() {
  gulp.watch('./public/sass/**/*.scss', ['scssToCss'])
})
