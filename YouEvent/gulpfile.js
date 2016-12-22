var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var react = require('gulp-react');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');

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
