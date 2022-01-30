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
  connection.query("select 1 from subjects", (queryErr, _) => {
    if (queryErr) handleDBError(queryErr);
    if (connection) connection.release();
  });
});

const handleDBError = (err: MysqlError) => {
  if (err) {
    if (Object.keys(ErrCodeToMessageMap).includes(err.code)) {
      console.error(
        "\n Mysql error: " + ErrCodeToMessageMap[<CommonDBErrorCodes>err.code], err.message
      );
    } else {
      console.error("An Unknown DB error has occured: ", err);
    }
  }
};
export { pool, handleDBError };
