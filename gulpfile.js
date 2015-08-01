var gulp = require('gulp')

// # Server
var nodemon = require('gulp-nodemon')
var browserSync = require('browser-sync');
var reload = browserSync.reload;


//# JS
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')


//# CSS
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass')
//var sass = require('gulp-sass')


//# Image
var svgmin = require('gulp-svgmin');


// IMAGE
//=================================

gulp.task('svgpretty', function(){
    return gulp.src('images_src/svg/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('assets/images'));
})


//  JAVASCRIPT
// =================================

gulp.task('js:build', function(){
    return gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
})

gulp.task('js:watch', ['js:build'], function(){
    gulp.watch('ng/**/*.js', ['js:build'])
})


// SASS
// =================================

gulp.task('css:build', function(){
    return sass('css/sass/styles.scss', { style: 'expanded'})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('assets'))
})

gulp.task('css:watch', ['css:build'], function(){
    gulp.watch('css/sass/**/*.scss', ['css:build'])
})



// SERVER
// =================================

gulp.task('dev:server', ['nodemon'], function() {
    browserSync({
        proxy: "localhost:3000",  // local node app address
        port: 5000,  // use *different* port than above
        files: ["assets/**/*.*"],
        browser: "google chrome",
        notify: true
    });
});

gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon(
        {
            script: 'server.js',
            ignore: ['ng*', 'gulp*', 'assets*'],
            ext: 'js html ejs',
            watch: ['server.js', 'views/**/*.*', 'controllers/**/*.js']
        }
    ).on('start', function () {
            if (!called) {
                called = true;
                cb();
            }
        }).on('restart', function () {
            console.log('nodemon restarted')
            setTimeout(function () {
                reload({stream: true});
            }, 50);
        })
})

gulp.task('build', ['js:build', 'css:build'])
gulp.task('watch', ['js:watch', 'css:watch'])
gulp.task('watch', ['js:watch', 'css:watch'])
gulp.task('dev', ['css:watch',  'dev:server'], function(){
    gulp.watch('assets/**/*.*', reload)
    gulp.watch('views/**/*.*', reload)
    gulp.watch('templates/**/*.*', reload)
})


