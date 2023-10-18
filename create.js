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
var sql = "CREATE TABLE pacientes (name VARCHAR(255), password VARCHAR(255), cpf VARCHAR(255))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});
