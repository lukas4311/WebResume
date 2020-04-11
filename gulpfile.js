let gulp = require('gulp'),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    fs = require("fs");

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

let app = {
    entry: './Typescript/main.tsx',
    publish: './wwwroot/js/',
    tsconfig: './tsconfig.json'
};

gulp.task('default', function () {

    let b = browserify({
        entries: [app.entry],
    });

    b.external(['react', 'react-dom'])
    b.plugin(tsify);
    b.transform(babelify, {
        presets: ['env', 'react']
    });

    return b.bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(gulp.dest(app.publish));
});

function getJsonFile(path) {
    return JSON.parse(fs.readFileSync(path));
}