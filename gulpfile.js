const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();

// Sass Task
function scssTask(){
    return src('app/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask(){
    return src('app/js/script.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// BrowserSync Init
function browserSyncServer(cb){
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browserSyncReload(cb){
    browserSync.reload();
    cb();
}

// Watch Task
function watchTask(){
    watch('*.html', browserSyncReload);
    watch(['app/**/*.scss', 'app/**/*.js'], series(scssTask, jsTask, browserSyncReload));
}

// Default Gulp Task
exports.default = series(
    scssTask,
    jsTask,
    browserSyncServer,
    watchTask
);