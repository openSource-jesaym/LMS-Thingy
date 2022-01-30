import express from "express";
const router = express.Router();
import { handleDBError, pool } from "../config/DB/Connection";

import { getCoursesData } from "../public/functions/Home";
 
// Home view / Feeds page
router.get("/", async (req, res) => {
  pool.getConnection(async (err, connection) => {
    if (err) handleDBError(err);
    const courses = await getCoursesData(connection);
    res.render("index", { courses });
  });
});



export default router;
