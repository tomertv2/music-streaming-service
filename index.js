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

app.get('/top_songs', (req, res) => {
    mysqlCon.query('SELECT * FROM songs LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(err.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/top_artists', (req, res) => {
    mysqlCon.query('SELECT * FROM artists LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(err.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/top_albums', (req, res) => {
    mysqlCon.query('SELECT * FROM albums LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(err.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/top_playlists', (req, res) => {
    mysqlCon.query('SELECT * FROM playlists LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(err.message);
            throw error;
        };
        res.send(results);
    });
});

app.listen(3001);
