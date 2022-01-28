import express from "express";
const router = express.Router();
import { handleDBError, pool } from "../config/DB/Connection";

import { getCoursesData, getSubjects } from "../public/functions/Home";
 
// Home view / Feeds page
router.get("/", async (req, res) => {
  pool.getConnection(async (err, connection) => {
    if (err) handleDBError(err);
    const courses = await getCoursesData(connection);
    res.render("index", { courses });
  });
});

// Courses Categories
router.get("/subjects", async (req, res) => {
  pool.getConnection(async (err, connection) => {
    if (err) handleDBError(err);
    const subjects = await getSubjects(connection);
    res.render("subjects", { subjects });
    // res.json(subjects)
  });
});

export default router;
