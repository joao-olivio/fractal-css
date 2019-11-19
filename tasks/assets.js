import gulp from 'gulp';
import rename from 'gulp-rename';

// Define tasks after requiring dependencies
function assets() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src(["src/**/*.png","src/**/*.jpg", "src/**/*.svg"])
 
            // Use sass with the files found, and log any errors
            .pipe(rename({
                dirname: ''
            }))
            // What is the destination for the compiled file?
            .pipe(gulp.dest("public/assets"))
    );
}
 
// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.assets = assets;