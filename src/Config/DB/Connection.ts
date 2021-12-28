require("dotenv").config();
import util from "util";
import mysql from "mysql";

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conn.connect((err) => {
  if (err) console.log(err);
});
const asyncQuery = util.promisify(conn.query).bind(conn);

export { conn, asyncQuery };
