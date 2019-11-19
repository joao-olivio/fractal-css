import gulp, { series } from 'gulp';
import { style } from './tasks/style';
import { assets } from './tasks/assets';

import { exec } from 'child_process';

function fractal () {
    console.log('http://localhost:3000/');
    exec('fractal start --sync', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
}

function watchSass () {
    gulp.watch('src/**/*.scss', style);
}

function watchAssets () {
    gulp.watch('src/**/*.png', assets);
}

function develop () {
    fractal();
    watchSass();
    watchAssets();
}

// Don't forget to expose the task!
exports.watch = watchSass;
exports.style = style;
exports.fractal = fractal;
exports.assets = assets;
exports.develop = develop;