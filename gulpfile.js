const {
  src,
  dest,
  watch
} = require("gulp");
const browserSync = require("browser-sync").create();
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

// Static server, обновление старницы автоматом
function bs() {
  serverSass();

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass", serverSass);
  watch("./js/*.js").on("change", browserSync.reload);
}

//CSSMIN ДОРАБОТАТЬ
//function cssmin() {
//  src("./css/**/*.css")
//   .pipe(cssmin())gulp server
//   .pipe(
//     rename({
//       suffix: ".min"
//     })
//  )
//  .pipe(dest("./css"));
//};

//SASS
function serverSass() {
  return src("./sass/*.sass")
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

exports.server = bs;