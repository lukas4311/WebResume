let gulp = require('gulp'),
    browserify = require("browserify"),
    tsify = require("tsify"),
    babelify = require('babelify'),
    fs = require("fs");

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

let app = {
    entry: './source/scripts/main.tsx',
    publish: './dist/scripts/publish.js',
    // tsconfig: './tsconfig.json'
};

// gulp.task('default', function () {

//     let b = browserify({
//         entries: [app.entry]
//     });

//     b.plugin(tsify, getJsonFile(app.tsconfig).compilerOptions);
//     b.transform(babelify, {
//         presets: ['env', 'react']
//     });

//     return b.bundle()
//         .pipe(source('bundle.js'))
//         .pipe(buffer())
//         .pipe(gulp.dest('dist'));
// });

// function getJsonFile(path) {
//     return JSON.parse(fs.readFileSync(path));
// }