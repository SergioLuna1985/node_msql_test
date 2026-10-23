import mysql from 'mysql2';
const ENV = process.env;

const con = mysql.createPool({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASSWORD,
  database: ENV.DB_NAME,
  port: ENV.DB_PORT
});

export const db = con.promise();

