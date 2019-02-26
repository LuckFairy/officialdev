/**
 * gulpfile.js
 * @authors LuckFairy (http://LuckFairy.github.io)
 * @date    2016-11-30 09:17:56
 * @version $1.0.0$
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var watchPath = require('gulp-watch-path');
var combiner = require('stream-combiner2');
var sourcemaps = require('gulp-sourcemaps');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var clean = require('gulp-clean');

var handleError = function(err) {
    var colors = gutil.colors;
    console.log('\n');
    gutil.log(colors.red('Error!'));
    gutil.log('fileName: ' + colors.red(err.fileName));
    gutil.log('lineNumber: ' + colors.red(err.lineNumber));
    gutil.log('message: ' + err.message);
    gutil.log('plugin: ' + colors.yellow(err.plugin));
};

gulp.task('testAutoFx', function () {
    gulp.src('dist/app/css/campus.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
        }))
        .pipe(gulp.dest('dist/app/css'));
});
gulp.task('minjs', function() {
    var combined = combiner.obj([
        gulp.src('src/js/**/global.js'),
        sourcemaps.init(),
        uglify(),
        sourcemaps.write('./'),
        gulp.dest('dist/js/')
    ]);
    combined.on('error', handleError);
});

gulp.task('minifycss', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(autoprefixer({
             browsers: ['last 2 versions', 'Android >= 4.0'],
             cascade: false
        }))
        .pipe(minifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watchjs', function() {
    gulp.watch('src/js/**/*.js', function(event) {
        var paths = watchPath(event, 'src/', 'dist/');
        /*
        paths
            { srcPath: 'src/js/log.js',
              srcDir: 'src/js/',
              distPath: 'dist/js/log.js',
              distDir: 'dist/js/',
              srcFilename: 'log.js',
              distFilename: 'log.js' }
        */
        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        var combined = combiner.obj([
            gulp.src(paths.srcPath),
            sourcemaps.init(),
            uglify(),
            sourcemaps.write('./'),
            gulp.dest(paths.distDir)
        ]);

        combined.on('error', handleError);
    });
});


gulp.task('watchcss', function() {
    gulp.watch('src/css/**/*.css', function(event) {
        var paths = watchPath(event, 'src/', 'dist/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(autoprefixer({
                 browsers: ['last 2 versions', 'Android >= 4.0'],
                 cascade: false
            }))
            .pipe(minifycss())
            .pipe(gulp.dest(paths.distDir));
    });
});


// 配置SASS任务

gulp.task('watchsass', function() {
    gulp.watch('src/sass/**/*', function(event) {
        var paths = watchPath(event, 'src/sass/', 'dist2/css/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);
        sass(paths.srcPath)
            .on('error', function(err) {
                console.error('Error!', err.message);
            })
            .pipe(sourcemaps.init())
            .pipe(minifycss())
            .pipe(autoprefixer({
                browsers: ['last 2 versions', 'Android >= 4.0'],
                cascade: false
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.distDir));
    });
});

// sass
gulp.task('sasscss', function() {
    sass('src/sass/campus.scss')
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
//      .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: false
        }))
//      .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist2/css'));
});

gulp.task('watchimage', function () {
    gulp.watch('src/images/**/*', function (event) {
        var paths = watchPath(event,'src/','dist/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(paths.distDir));
    });
});

gulp.task('cleanCss', function () {
    gulp.src('dist/css/*.map')
        .pipe(clean());
});

gulp.task('cleanJs', function () {
    gulp.src('dist/js/*.map')
        .pipe(clean());
});

// gulp.task('image', function () {
//     gulp.src('src/images/**/*')
//         .pipe(imagemin({
//             progressive: true
//         }))
//         .pipe(gulp.dest('dist/images'));
// });

gulp.task('watchimage', function () {
    gulp.watch('src/images/**/*', function (event) {
        var paths = watchPath(event,'src/','dist/');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(imagemin({
                progressive: true
            }))
            .pipe(gulp.dest(paths.distDir));
    });
});
// 编译jade
// jade()不带pretyy参数则会压缩编译jade后得到的html
// jade加参数pretty:true将不压缩编译jade后得到的html
gulp.task('jade',function(){
    gulp.src('src/jade/*.jade')
        .pipe(jade({
            pretty:true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('watchjade', function () {
    gulp.watch('src/jade/*.jade', function (event) {
        var paths = watchPath(event,'src','./');

        gutil.log(gutil.colors.green(event.type) + ' ' + paths.srcPath);
        gutil.log('Dist ' + paths.distPath);

        gulp.src(paths.srcPath)
            .pipe(jade({
                pretty:true
            }))
            .pipe(gulp.dest('./'));
    });
});
gulp.task('default', ['watchjs', 'watchcss', 'watchsass','watchimage','watchjade']);
