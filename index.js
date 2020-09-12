const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const mysqlCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tomer123",
    database: "sql_music_app",
    multipleStatements: true
});

mysqlCon.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(3001);
