import util from "util";
import { pool } from "../../Config/DB/Connection";

// Function that returns an array of courses data
const getCoursesForOneSubject = async (subjectName: string) => {
  pool.getConnection(async (err, connection) => {
    if (err) throw err;
    const asyncQuery = util.promisify(connection.query).bind(connection);

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
            subjects.subject_name = "${subjectName}"
        )
        ORDER BY courses.course_id DESC;`;
      return await asyncQuery(query);
    } catch (error) {
      console.log(error);
    }
  });
};
export { getCoursesForOneSubject };
