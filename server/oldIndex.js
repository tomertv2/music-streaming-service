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
    mysqlCon.query(`SELECT songs.*, albums.cover_img 
                    FROM songs
                    INNER JOIN albums
                    ON songs.album_id = albums.album_id
                    ORDER BY youtube_link 
                    LIMIT 20;`, (error, results, fields) => {
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
    mysqlCon.query(`SELECT *, artists.artist_name, albums.album_name
                    FROM songs 
                    INNER JOIN artists
                    ON songs.artist_id = artists.artist_id
                    INNER JOIN albums
                    ON songs.album_id = albums.album_id
                    WHERE song_id = ?`, req.params.id, (error, results, fields) => {
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
    mysqlCon.query(`SELECT albums.*, artists.artist_name 
                    FROM albums 
                    INNER JOIN artists 
                    ON albums.artist_id = artists.artist_id 
                    WHERE album_id = ?`, req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.get('/playlist/:id', async (req, res) => {
    mysqlCon.query(`SELECT playlists.*, songs_in_playlists.*, songs.title, songs.length, songs.lyrics, artists.artist_name
                    FROM playlists
                    JOIN songs_in_playlists
                    ON playlists.playlist_id = songs_in_playlists.playlist_id
                    JOIN songs
                    ON songs.song_id = songs_in_playlists.song_id
                    INNER JOIN artists
                    ON songs.artist_id = artists.artist_id
                    WHERE playlists.playlist_id = ?`, req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.post('/song', async (req, res) => {
    mysqlCon.query('INSERT INTO songs SET ?', req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.post('/album', async (req, res) => {
    mysqlCon.query('INSERT INTO albums SET ?', req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.post('/playlist', async (req, res) => {
    mysqlCon.query('INSERT INTO playlists SET ?', req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.post('/artist', async (req, res) => {
    mysqlCon.query('INSERT INTO artists SET ?', req.body, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.put('/song/:id', async (req, res) => {
    mysqlCon.query('UPDATE songs SET title = ?, length = ?, youtube_link = ?, track_number = ?, lyrics = ?, created_at = ?, upload_at = ?, album_id = ?, artist_id = ? WHERE song_id = ?', 
    [req.body.title, req.body.length, req.body.youtube_link, req.body.track_number, req.body.lyrics, 
    req.body.created_at, req.body.upload_at, req.body.album_id, req.body.artist_id, req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error);
            throw error;
        }
        res.send(results);
    });
});

app.put('/artist/:id', async (req, res) => {
    mysqlCon.query('UPDATE artists SET artist_name = ?, cover_img = ?, upload_at = ? WHERE artist_id = ?', 
    [req.body.artist_name, req.body.cover_img, req.body.upload_at, req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error);
            throw error;
        }
        res.send(results);
    });
});

app.put('/album/:id', async (req, res) => {
    mysqlCon.query('UPDATE albums SET album_name = ?, cover_img = ?, created_at = ?, upload_at = ?, artist_id = ? WHERE album_id = ?', 
    [req.body.album_name, req.body.cover_img, req.body.created_at, req.body.upload_at, req.body.artist_id, req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error);
            throw error;
        }
        res.send(results);
    });
});

app.put('/playlist/:id', async (req, res) => {
    mysqlCon.query('UPDATE playlists SET playlist_name = ?, cover_img = ?, created_at = ?, upload_at = ? WHERE playlist_id = ?', 
    [req.body.playlist_name, req.body.cover_img, req.body.created_at, req.body.upload_at, req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error);
            throw error;
        }
        res.send(results);
    });
});

app.delete('/song/:id', async (req, res) => {
    mysqlCon.query('DELETE FROM songs WHERE song_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.delete('/artist/:id', async (req, res) => {
    mysqlCon.query('DELETE FROM artists WHERE artist_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.delete('/album/:id', async (req, res) => {
    mysqlCon.query('DELETE FROM albums WHERE album_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.delete('/playlist/:id', async (req, res) => {
    mysqlCon.query('DELETE FROM playlists WHERE playlist_id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
    });
});

app.get('/albumsByArtist/:id', async (req, res) => {
    mysqlCon.query('SELECT * FROM albums WHERE artist_id = ? ORDER BY album_id', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.get('/songsFromAlbum/:id', async (req, res) => {
    mysqlCon.query(`SELECT songs.*, artists.artist_name
                    FROM songs 
                    INNER JOIN artists 
                    ON artists.artist_id = songs.artist_id
                    WHERE album_id = ?`, req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.get('/songsByArtist/:id', async (req, res) => {
    mysqlCon.query(`SELECT songs.*, artists.artist_name, albums.cover_img
                    FROM songs 
                    INNER JOIN artists 
                    ON artists.artist_id = songs.artist_id 
                    INNER JOIN albums 
                    ON albums.album_id = songs.album_id 
                    WHERE songs.artist_id = ?`, req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        }
        res.send(results);
    });
});

app.listen(3001);
