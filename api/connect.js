import mysql from "mysql";

export const db = mysql.createConnection({
    host:"us-cdbr-east-06.cleardb.net",
    user:"be6fbe79d5626b",
    password:"0ef5d7ed",
    database:"heroku_df351fc08afdf05",
    // port:"3306",
});
