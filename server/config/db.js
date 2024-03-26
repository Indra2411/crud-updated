const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: "root",
  password: "",
  database: "myproject",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

module.exports = connection;
