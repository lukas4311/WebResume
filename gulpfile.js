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

    b.exclude(['react', 'react-dom'])
    b.plugin(tsify,getJsonFile(app.tsconfig).compilerOptions);
    b.transform(babelify, {
        presets: ['es2015', 'react']
    });

    return b.bundle()
        .pipe(source("main.js"))
        .pipe(buffer())
        .pipe(gulp.dest(app.publish));
});

function getJsonFile(path) {
    return JSON.parse(fs.readFileSync(path));
}