import mysql, { MysqlError } from "mysql";
import { CommonDBErrorCodes, ErrCodeToMessageMap } from "../../models/db.model";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {

  if (err) return handleDBError(err);
  connection.query("select 1 from subjects", (err, rows) => {
    if (err) handleDBError(err)
    if (connection) connection.release()
  });
})

const handleDBError = (err: MysqlError) => {
  if (err) {
    if (Object.keys(ErrCodeToMessageMap).includes(err.code)) {
      console.error("Mysql error: "+ErrCodeToMessageMap[<CommonDBErrorCodes>err.code]);
    } else {
      console.error("An Unknown DB error has occured: ",err);
    } 
  }
}
export { pool, handleDBError };
