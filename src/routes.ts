import { Router } from "express";
import { Express } from "express-serve-static-core";
import homeRoute from "./routes/Home";
import coursesRoute from "./routes/Courses";

const initRoutes = (app: Express) => {
  const router = Router();

  router.use("/", homeRoute);

  router.use("/course", coursesRoute);

  router.get("/about", (req, res) => {
    res.render("about");
  });

  router.get("/contact", (req, res) => {
    res.render("contact");
  });

  router.get("/contributors", (req, res) => {
    res.render("contributors");
  });

  router.get("/admin", (req, res) => {
    res.redirect("http://197.13.27.192/");
  });

  router.get("/docs", (req, res) => {
    res.redirect("https://mds-islaib.gitbook.io/");
  });

  router.get("*", (req, res) => {
    res.render("404");
  });

  return app.use(router);
};

export { initRoutes };
