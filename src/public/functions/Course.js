const { conn } = require('../../Config/DB/Connection')

// Function that returns an array of courses data 
const getCoursesForOneSubject = subjectName => {
    return new Promise((resolve, reject) => {
        try {
            let query = `
                    SELECT *
                    FROM 
                        courses
                    WHERE
                        courses.subject_id = (
                                                SELECT 
                                                    subjects.subject_id 
                                                FROM 
                                                    subjects 
                                                WHERE 
                                                    subjects.subject_name="${subjectName}"
                                            )
                    ORDER BY courses.course_id DESC;`
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
    getCoursesForOneSubject
}