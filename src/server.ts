import express from "express";
const app = express();
const PORT = 2015 || process.env.PORT;
import path from "path";
// require('dotenv').config()
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + '/public')));

app.get("/", (req, res) => {
//   res.json({"message": "Hello Clarice 😬"})
  res.render("index");
});

// ROUTES
import homeRoute from "./routes/Home";
app.use("/home", homeRoute);

import coursesRoute from "./routes/Courses";
app.use("/course", coursesRoute);

// app.get("*", (req, res) => {
//   res.json({ message: "🙈 404!" });
// });
app.listen(PORT, () => {
  console.log(`✨ Live on port ${PORT}`);
});
