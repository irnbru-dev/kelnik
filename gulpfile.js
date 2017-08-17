'use strict';

const del = require('del');
const browserSync = require('browser-sync').create();

var gulp = require('gulp'),
    pug = require('gulp-pug'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    prettify = require('gulp-prettify'),
    uglifycss = require('gulp-uglifycss'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions", '> 5%', 'ie >= 10']});

var path = {
    build: {
        js:         'build/js/',
        css:        'build/css/',
        html:       'build/',
        img:        'build/img/'
    },
    src: {
        js:         'src/js/**/*.js',
        less:       'src/less/*.less',
        html:       'src/**/*.pug',
        img:        'src/img/**/*.*'
    },
    watch: {
        js:         'src/js/**/*.js',
        less:       ['src/less/**/*.less'],
        pug:        ['src/pug/**/*.pug'],
        img:        'src/img/*.*'
    }
};

gulp.task('pug', function() {
    return gulp.src(path.src.html)
        .pipe(pug())
        .pipe(prettify({
            indent_size: 2
        }))
        .pipe(gulp.dest(path.build.html))
});

gulp.task('js', function() {
    return gulp.src(path.src.js)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
});

gulp.task('less', function () {
    return gulp.src(path.src.less)
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest(path.build.css))
});

gulp.task('img', function () {
    return gulp.src(path.src.img)
        // .pipe(newer(path.build.img))
        // .pipe(gulpif(devBuild, changed(path.build.img)))
        // .pipe(gulpif(!devBuild, imagemin()))
        .pipe(gulp.dest(path.build.img))
    // .pipe(reload({stream: true}));
});

// Clean
gulp.task('clean', function () {
    return del(path.clean);
});

// Overall build
gulp.task('build', gulp.series('clean', gulp.parallel('pug', 'js' , 'less', 'img')));


// Server config
var config = {
    server: {
        baseDir: "./build"
    },
//  tunnel: true,
    host: 'localhost',
    port: 9000
};

// Browser sync
gulp.task('serve', function() {
    browserSync.init(config);

    // browserSync.reload;
    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch(path.watch.less, gulp.series('less'));
    gulp.watch(path.watch.js, gulp.series('js'));
    gulp.watch(path.watch.pug, gulp.series('pug'));
    gulp.watch(path.watch.img, gulp.series('img'));
});

// Default task
gulp.task('default',
    
    gulp.series('build', gulp.parallel('watch', 'serve'))
);