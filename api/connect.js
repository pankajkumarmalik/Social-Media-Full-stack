import mysql from "mysql";
import dotenv from"dotenv";

dotenv.config()


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "social"
    
});
