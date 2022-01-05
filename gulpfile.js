const gulp = require("gulp");
const ts = require("gulp-typescript");
const sass = require("gulp-sass")(require("sass"));
const del = require("del");
const sourcemaps = require("gulp-sourcemaps");
const tsProject = ts.createProject("tsconfig.json");

// Task which would transpile typescript to javascript
gulp.task("typescript", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

// Task which would delete the old dist directory if present
gulp.task("build-clean", function () {
  return del(["./dist"]);
});

// Task which would just create a copy of the current views directory in dist directory
gulp.task("env", function () {
  return gulp.src("./src/config/env/.env").pipe(gulp.dest("./dist/config/env"));
});

// Task which would compile the sass files to css
gulp.task("buildStyles", () => {
  return gulp
    .src("./src/public/stylesheets/**/*.scss")
    // .pipe(sourcemaps.init()) // to add source maps
    .pipe(sass.sync({ outputStyle: "compressed" }).on("error", sass.logError))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/public/stylesheets/"));
});

// Task which would just create a copy of the current views directory in dist directory
gulp.task("views", function () {
  return gulp.src("./src/views/**/*.ejs").pipe(gulp.dest("./dist/views"));
});

// Task which would just create a copy of the current static assets directory in dist directory
gulp.task("assets", function () {
  return gulp
    .src("./src/public/assets/**/*")
    .pipe(gulp.dest("./dist/public/assets"));
});

// The default task which runs at start of the gulpfile.js
gulp.task(
  "default",
  gulp.series(
    "build-clean",
    "typescript",
    "buildStyles",
    "env",
    "views",
    "assets"
  ),
  () => {
    console.log("Done");
  }
);
