import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root345",
  database:"social"
})
