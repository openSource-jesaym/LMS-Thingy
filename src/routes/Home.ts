import express from "express";
const router = express.Router();
import { pool } from "../Config/DB/Connection";

import { getCoursesData, getSubjects } from "../public/functions/Home";
 
// Home view / Feeds page
router.get("/", async (req, res) => {
  pool.getConnection(async (err, connection) => {
    if (err) throw err;
    const courses = await getCoursesData(connection);
    res.render("home", { courses });
  });
});

// Courses Categories
router.get("/subjects", async (req, res) => {
  pool.getConnection(async (err, connection) => {
    if (err) throw err;
    const subjects = await getSubjects(connection);
    res.render("subjects", { subjects });
    // res.json(subjects)
  });
});

export default router;
