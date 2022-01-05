import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config({path: __dirname + "/config/env/.env"});
const PORT = 2015 || process.env.PORT;
import path from "path";
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", (req, res) => {
  res.render("index");
});

// ROUTES
import homeRoute from "./routes/Home";
app.use("/home", homeRoute);

import coursesRoute from "./routes/Courses";
app.use("/course", coursesRoute);

app.listen(PORT, () => {
  console.log(`✨ Live on port ${PORT}`);
});
