const { conn } = require('../Config/DB/Connection')

// Function that returns an array of courses data 
const getCoursesData = _ => {
    return new Promise((resolve, reject) => {
        try {
            let query = "SELECT * FROM courses;"
            conn.query(query, function (error, result) {
                if (error) console.log(error);
                resolve(result)
            })
        } catch (error) {
            console.log(error);
        }
    })
}

// A function that returns an array of subjects
const getSubjects = _ => {
    return new Promise((resolve, reject) => {
        try {
            let query = `
            SELECT 
                subjects.subject_name AS "Subject", 
                subjects.subject_teacher AS "Teacher",
                (SELECT COUNT(*) FROM courses WHERE courses.subject_id=subjects.subject_id) AS "Courses count"
            FROM subjects;
            `
            conn.query(query, function (error, result) {
                if (error) console.log(error);
                resolve(result)
            })
        } catch (error) {
            console.log(error);
        }
    })
}


// ADD FUNCTIONS HERE
module.exports = {
    getCoursesData,
    getSubjects
}