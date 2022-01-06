import express from "express";
const router = express.Router();
import { getCoursesForOneSubject } from '../public/functions/Course';


router.get(`/:subjectName`, async (req, res) => {
    const subjectName = req.params.subjectName
    const subjectCourses = await getCoursesForOneSubject(subjectName);
    res.render('course', { subjectCourses, subjectName })
})

export default router;