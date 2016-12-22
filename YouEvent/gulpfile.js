var gulp = require('gulp');

var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var react = require('gulp-react');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var buffer = require('vinyl-buffer');

var paths = {
    src: __dirname + '/Scripts',
    dist: __dirname + '/Scripts/dist'
}

gulp.task('es6', function() {
    return browserify(paths.src + '/init.jsx', {
            extensions: ['.js', '.jsx'],
            debug: true
        })
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .on('error', notify.onError())
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.dist));
});

var customOpts = {
    entries: [paths.src + '/init.jsx'],
    debug: true,
    cache: {},
    packageCache: {}
}
var opts = Object.assign({}, watchify.args, customOpts);

gulp.task('es6-bundle', function() {
    return browserify(paths.src + '/init.jsx', {
            extensions: ['.js', '.jsx'],
            debug: true
        })
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .on('error', notify.onError())
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('es6-watchify', function() {
    var bundler = watchify(browserify(opts));

    function rebundle() {
        return bundler.bundle()
        .on('error', notify.onError())
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.dist));
    }

    bundler.transform(babelify, {presets: ['es2015', 'react']})
        .on('update', rebundle);

    return rebundle();
});

gulp.task('es6-watch', function() {
    return gulp.watch(__dirname + '/**/*.jsx', ['es6-watchify']);
});
