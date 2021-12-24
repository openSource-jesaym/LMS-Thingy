const express = require("express");
const router = express.Router();
const { getCoursesForOneSubject } = require('../public/functions/Course')


router.get(`/:subjectName`, (req, res) => {
    let subject = req.params.subjectName
    
    getCoursesForOneSubject(subject)
    .then(result => {
        res.render('course', { subjectCourses: result, subjectName: subject })
    })
})


module.exports = router