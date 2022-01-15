import express from "express";
const router = express.Router();
import { getCoursesForOneSubject } from '../public/functions/Course';


router.get(`/:subjectName`, (req, res) => {
    const subjectName = req.params.subjectName
    getCoursesForOneSubject(subjectName)
    .then(subjectCourses => {
        res.render('course', { subjectCourses, subjectName })
    })
})

export default router;