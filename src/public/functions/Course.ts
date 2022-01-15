import { pool, handleDBError } from "../../config/DB/Connection";

// Function that returns an array of courses data
const getCoursesForOneSubject = (subjectName: string) => {
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
            ORDER BY courses.course_id DESC;
        `;
      pool.getConnection((err, connection) => {
        if (err) return handleDBError(err);
        
        connection.query(query, function (error, result) {
          if (error) console.log(error);
          resolve(result);
        });
      })
    } catch (error: any) {
      console.log(error);
      return;
    }
  })
};
export { getCoursesForOneSubject };