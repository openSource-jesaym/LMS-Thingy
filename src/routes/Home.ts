import express from "express";
const router = express.Router();
import { getCoursesData, getSubjects } from "../public/functions/Home";
 
// Home view / Feeds page
router.get("/", async (req, res) => {
  const courses = await getCoursesData();
    res.render("home", { courses });
  // res.json(courses)
});

// Courses Categories
router.get("/subjects", async (req, res) => {
  const subjects = await getSubjects();
  res.render("subjects", { subjects });
  // res.json(subjects)
});

export default router;
