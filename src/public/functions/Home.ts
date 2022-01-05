import { PoolConnection } from "mysql";
import util from "util";
import { handleDBError } from "../../config/DB/Connection";
import { Course } from "../../models/course.model";
import { Subject } from "../../models/subject.model";

// Function that returns an array of courses data
const getCoursesData = async (connection: PoolConnection) => {
  const asyncQuery = util.promisify(connection.query).bind(connection);
  try {
    const query = `
      SELECT 
          (SELECT subjects.subject_name FROM subjects WHERE subjects.subject_id = courses.subject_id) AS "subject",
          course_name AS "course",
          course_created_at AS "postedON",
          course_link AS "link",
          course_description AS "description"
      FROM courses
      ORDER BY course_id DESC;`;
    const rows = <Course[]>await asyncQuery(query);
    return rows;
  } catch (error: any) {
    console.error(error);
  } finally {
    connection.release();
  }
};

// A function that returns an array of subjects
const getSubjects = async (connection: PoolConnection) => {
  const asyncQuery = util.promisify(connection.query).bind(connection);
  try {
    const query = `
      SELECT 
          subjects.subject_name AS "subject", 
          subjects.subject_teacher AS "teacher",
          (SELECT COUNT(*) FROM courses WHERE courses.subject_id=subjects.subject_id) AS "coursesCount"
      FROM subjects;
      `;
    const rows = <Subject[]>await asyncQuery(query);
    return rows;
  } catch (error: any) {
    console.error(error);
  } finally {
    connection.release();
  }
};

export { getCoursesData, getSubjects };
