const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "url_shortener"
});

db.connect((err) => {
    if (err) {
        console.error("MySQL Error:", err.message);
        return;
    }
    console.log("MySQL Connected");
});

module.exports = db;