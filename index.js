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
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/top_artists', (req, res) => {
    mysqlCon.query('SELECT * FROM artists LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/top_albums', (req, res) => {
    mysqlCon.query('SELECT * FROM albums LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/top_playlists', (req, res) => {
    mysqlCon.query('SELECT * FROM playlists LIMIT 20;', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/song/:id', async (req, res) => {
    mysqlCon.query('SELECT * FROM songs WHERE song_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/artist/:id', async (req, res) => {
    mysqlCon.query('SELECT * FROM artists WHERE artist_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.get('/album/:id', async (req, res) => {
    mysqlCon.query('SELECT * FROM albums WHERE artist_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.get('/playlist/:id', async (req, res) => {
    mysqlCon.query('SELECT * FROM playlists WHERE artist_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.post('/song', async (req, res) =>{
    mysqlCon.query('INSERT INTO songs SET ?',req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});


app.listen(3001);
