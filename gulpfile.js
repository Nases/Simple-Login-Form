const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("default", function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./*").on("change", browserSync.reload);
});
