const express = require("express");
const router = express.Router();
const { getCoursesData, getSubjects} = require('../Functions/Home')


// Home view / Feeds page
router.get('/', (req, res)=>{
    getCoursesData()
    .then(courses=>{
        res.json(courses)
    })
})

// Courses Categories
router.get('/subjects', (req, res)=>{
    getSubjects()
    .then(subjects=>[
        res.json(subjects)
    ])
})


module.exports = router