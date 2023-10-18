var mysql = require('mysql');

 var con = mysql.createConnection({
host: "localhost",
user: "phpmyadmin",
password: "aluno",
database: "mydb"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
var sql = "CREATE TABLE consultas (name VARCHAR(255), date DATE, time INT(255), doctor VARCHAR(255)";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});
