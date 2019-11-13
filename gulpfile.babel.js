import gulp, { parallel } from 'gulp';
import { style } from './tasks/style';

import { exec } from 'child_process';

function fractal () {
    exec('fractal start --sync', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
}

function watch () {
    gulp.watch('src/**/*.scss', style);
}

function develop () {
    parallel(fractal, watch);
}

// Don't forget to expose the task!
exports.watch = watch;
exports.style = style;
exports.fractal = fractal;
exports.develop = develop;