import express from "express";
const router = express.Router();
import { handleDBError, pool } from "../config/DB/Connection";

import { getCoursesForOneSubject } from '../public/functions/Course';
import { getSubjects } from "../public/functions/Home";

// Courses Categories
router.get("/subjects", async (req, res) => {
    pool.getConnection(async (err, connection) => {
      if (err) handleDBError(err);
      const subjects = await getSubjects(connection);
      res.render("subjects", { subjects });
      // res.json(subjects)
    });
  });
router.get(`/:subjectName`, (req, res) => {
    const subjectName = req.params.subjectName
    getCoursesForOneSubject(subjectName)
    .then(subjectCourses => {
        res.render('course', { subjectCourses, subjectName })
    })
})

export default router;