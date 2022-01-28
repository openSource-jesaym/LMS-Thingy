import express from "express";
import dotenv from "dotenv";
import path from "path";
const app = express();
const PORT = 2015 || process.env.PORT;

dotenv.config({path: path.join(__dirname, '/config/env/.env')});
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));


// ROUTES
import homeRoute from "./routes/Home";
app.use("/", homeRoute);

import coursesRoute from "./routes/Courses";
app.use("/course", coursesRoute);

app.get('/about', (req, res)=> {
  res.render('about')
})

app.get('/contact', (req, res)=> {
  res.render('contact')
})

app.get('/contributors', (req, res)=> {
  res.render('contributors')
})

app.get("/admin", (req, res) => {
  res.redirect("http://197.13.27.192/");
});

app.get("/docs", (req, res) => {
  res.redirect("https://mds-islaib.gitbook.io/");
});

app.get('*', (req, res)=> {
  res.render('404')
})
app.listen(PORT, () => {
  console.log(`✨ Live on port ${PORT}`);
});
