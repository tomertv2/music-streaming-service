DROP DATABASE IF EXISTS sql_music_app;
CREATE DATABASE sql_music_app; 
USE sql_music_app;

CREATE TABLE users(
    user_id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL,
    upload_at DATE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_admin BOOLEAN NOT NULL,
    preferences JSON NOT NULL,
    remember_token BOOLEAN NOT NULL,
    PRIMARY KEY (user_id)
);
INSERT INTO users VALUES (1, 'user1', 'user1@example.co', '2020-08-15', '2020-09-06', 'pa55w0rd1', FALSE, '{"fav_artist": "arctic monkeys", "fav_genre": "rock"}', FALSE);
INSERT INTO users VALUES (2, 'user2', 'user2@example.co', '2020-04-23', '2020-06-17', 'pa55w0rd2', FALSE, '{"fav_artist": "martin garrix", "fav_genre": "edm"}', TRUE);
INSERT INTO users VALUES (3, 'user3', 'user3@example.co', '2020-02-01', '2020-05-23', 'pa55w0rd3', FALSE, '{"fav_artist": "dekel vaknin", "fav_genre": "mizrahit"}', FALSE);
INSERT INTO users VALUES (4, 'admin', 'admin@example.co', '2019-10-13', '2020-01-05', 'adm1npa55w0rd', TRUE, '{"fav_artist": "maluma", "fav_genre": "pop"}', TRUE);

CREATE TABLE artists(
    artist_id INT NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR(255) NOT NULL,
    cover_img VARCHAR(255) NULL,
    upload_at DATE NOT NULL,
    PRIMARY KEY (artist_id)
);
INSERT INTO artists VALUES (1, 'arctic monkeys', 'shorturl.at/euEIZ', '2002-12-10');
INSERT INTO artists VALUES (2, 'solomun', 'shorturl.at/enDPR', '2000-10-21');
INSERT INTO artists VALUES (3, 'cardi b', 'shorturl.at/nuAS7', '2016-04-16');
INSERT INTO artists VALUES (4, 'maluma', 'shorturl.at/nuOU7', '2014-07-17');
INSERT INTO artists VALUES (5, 'ed shiran', 'shorturl.at/bcpH2', '2012-02-18');
INSERT INTO artists VALUES (6, 'drake', 'shorturl.at/bfpAQ', '2005-08-10');
INSERT INTO artists VALUES (7, 'camilla cabello', 'shorturl.at/izJR0', '2010-10-19');
INSERT INTO artists VALUES (8, 'taylor swift', 'shorturl.at/cnQZ0', '2001-11-05');
INSERT INTO artists VALUES (9, 'dekel vaknin', 'shorturl.at/xDJM1', '2019-01-04');
INSERT INTO artists VALUES (10, 'eyal golan', 'shorturl.at/xOVYZ', '1998-03-09');
INSERT INTO artists VALUES (11, 'eden ben zaken', 'shorturl.at/uvST0', '2016-03-19');
INSERT INTO artists VALUES (12, 'dynoro', 'shorturl.at/efIZ9', '2018-02-24');
INSERT INTO artists VALUES (13, 'martin garrix', 'shorturl.at/dvAE5', '2006-06-07');
INSERT INTO artists VALUES (14, 'hardwell', 'shorturl.at/chkAD', '1996-11-29');
INSERT INTO artists VALUES (15, 'avicii', 'shorturl.at/gwyG5', '2007-07-30');

CREATE TABLE playlists(
    playlist_id INT NOT NULL AUTO_INCREMENT,
    playlist_name VARCHAR(255) NOT NULL,
    cover_img VARCHAR(255) NULL,
    created_at DATE NOT NULL,
    upload_at DATE NOT NULL,
    PRIMARY KEY (playlist_id)
);
INSERT INTO playlists VALUES (1, 'edm hits', 'shorturl.at/tuzZ6', '2019-07-30', '2020-04-19');
INSERT INTO playlists VALUES (2, 'pop hits', 'shorturl.at/gAKU0', '2019-02-21', '2020-06-14');
INSERT INTO playlists VALUES (3, 'rock hits', 'shorturl.at/EHM38', '2019-01-26', '2020-03-18');
INSERT INTO playlists VALUES (4, 'jazz hits', 'shorturl.at/cwzIX', '2019-08-15', '2020-08-10');
INSERT INTO playlists VALUES (5, 'israeli hits', 'shorturl.at/kqtBS', '2019-12-19', '2020-09-13');
INSERT INTO playlists VALUES (6, 'country hits', 'shorturl.at/eBFX8', '2019-10-11', '2020-12-16');
INSERT INTO playlists VALUES (7, 'indie hits', 'shorturl.at/iwHJ3', '2019-02-04', '2020-11-25');
INSERT INTO playlists VALUES (8, 'blues hits', 'shorturl.at/oEKT3', '2019-09-03', '2020-10-28');
INSERT INTO playlists VALUES (9, 'hip hop hits', 'shorturl.at/hvEO3', '2019-01-08', '2020-01-29');
INSERT INTO playlists VALUES (10, 'reggae hits', 'shorturl.at/xzES1', '2019-10-02', '2020-08-06');

CREATE TABLE albums(
    album_id INT NOT NULL AUTO_INCREMENT,
    album_name VARCHAR(255) NOT NULL,
    cover_img VARCHAR(255) NULL,
    created_at DATE NOT NULL,
    upload_at DATE NOT NULL,
    artist_id INT NOT NULL,
    PRIMARY KEY (album_id),
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id)
);
INSERT INTO albums VALUES (1, 'amazing charts', 'shorturl.at/oc4mw', '2019-07-31', '2020-04-26', '4');
INSERT INTO albums VALUES (2, 'cool vibes', 'shorturl.at/1WND8', '2019-05-12', '2020-07-11', '6');
INSERT INTO albums VALUES (3, 'stones', 'shorturl.at/mEK73', '2019-08-27', '2020-06-17', '9');
INSERT INTO albums VALUES (4, 'hello', 'shorturl.at/9xm2e', '2019-04-22', '2020-03-26', '10');
INSERT INTO albums VALUES (5, 'zero', 'shorturl.at/jd6db', '2019-03-11', '2020-06-29', '10');
INSERT INTO albums VALUES (6, 'defferent world', 'shorturl.at/n39wm', '2019-09-24', '2020-06-30', '6');
INSERT INTO albums VALUES (7, 'true', 'shorturl.at/0zn3j', '2019-01-29', '2020-09-04', '1');
INSERT INTO albums VALUES (8, 'alarm', 'shorturl.at/laoq6', '2019-11-06', '2020-11-05', '1');
INSERT INTO albums VALUES (9, 'mad love', 'shorturl.at/0nx26', '2019-12-03', '2020-12-18', '1');
INSERT INTO albums VALUES (10, 'squeeze', 'shorturl.at/8nc3m', '2019-08-07', '2020-10-26', '5');

CREATE TABLE songs(
    song_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    length TIME NOT NULL,
    youtube_link VARCHAR(255) NOT NULL,
    track_number INT NOT NULL,
    lyrics TEXT NOT NULL,
    created_at DATE NOT NULL,
    upload_at DATE NOT NULL,
    album_id INT NOT NULL,
    artist_id INT NOT NULL,
    PRIMARY KEY (song_id),
    FOREIGN KEY (album_id) REFERENCES albums (album_id),
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id)
);
INSERT INTO songs VALUES (1, 'hello', '00:03:20', 'https://youtu.be/834bc8374b', '1', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '1', '3');
INSERT INTO songs VALUES (2, 'you', '00:05:27', 'https://youtu.be/2398nc4', '6', 'what a cool lyrics...', '2019-05-17', '2020-05-21', '1', '6');
INSERT INTO songs VALUES (3, 'so far', '00:04:15', 'https://youtu.be/29348nc', '4', 'what a cool lyrics...', '2019-02-04', '2020-02-14', '2', '5');
INSERT INTO songs VALUES (4, 'imposible', '00:04:49', 'https://youtu.be/29z3n978x', '1', 'what a cool lyrics...', '2019-08-16', '2020-05-17', '3', '3');
INSERT INTO songs VALUES (5, 'summer', '00:03:59', 'https://youtu.be/27zv625z', '1', 'what a cool lyrics...', '2019-09-28', '2020-09-18', '3', '8');
INSERT INTO songs VALUES (6, 'sof ona', '00:04:36', 'https://youtu.be/5069b7mv', '5', 'what a cool lyrics...', '2019-12-03', '2020-11-05', '3', '1');
INSERT INTO songs VALUES (7, 'suger', '00:02:26', 'https://youtu.be/28374ccd', '2', 'what a cool lyrics...', '2019-11-30', '2020-10-03', '4', '4');
INSERT INTO songs VALUES (8, 'what??', '00:05:14', 'https://youtu.be/2653xv2b3x', '4', 'what a cool lyrics...', '2019-10-16', '2020-02-02', '5', '9');
INSERT INTO songs VALUES (9, 'only one', '00:04:06', 'https://youtu.be/5685nb495', '6', 'what a cool lyrics...', '2019-01-23', '2020-04-09', '6', '7');
INSERT INTO songs VALUES (10, 'jambo', '00:04:08', 'https://youtu.be/vz6125xv', '9', 'what a cool lyrics...', '2019-02-21', '2020-02-25', '6', '3');
INSERT INTO songs VALUES (11, 'some words', '00:03:36', 'https://youtu.be/37c6b348', '8', 'what a cool lyrics...', '2019-07-07', '2020-01-30', '7', '2');

CREATE TABLE songs_in_playlists(
    songs_in_plalists_id INT NOT NULL AUTO_INCREMENT,
    playlist_id INT NOT NULL,
    song_id INT NOT NULL,
    PRIMARY KEY (songs_in_plalists_id),
    FOREIGN KEY (playlist_id) REFERENCES playlists (playlist_id),
    FOREIGN KEY (song_id) REFERENCES songs (song_id)
);
INSERT INTO songs_in_playlists VALUES (1, '7', '2');
INSERT INTO songs_in_playlists VALUES (2, '2', '5');
INSERT INTO songs_in_playlists VALUES (3, '6', '7');
INSERT INTO songs_in_playlists VALUES (4, '5', '4');
INSERT INTO songs_in_playlists VALUES (5, '6', '1');
INSERT INTO songs_in_playlists VALUES (6, '8', '5');
INSERT INTO songs_in_playlists VALUES (7, '2', '9');
INSERT INTO songs_in_playlists VALUES (8, '2', '4');
INSERT INTO songs_in_playlists VALUES (9, '2', '2');
INSERT INTO songs_in_playlists VALUES (10, '1', '7');
INSERT INTO songs_in_playlists VALUES (11, '4', '8');
INSERT INTO songs_in_playlists VALUES (12, '6', '5');
INSERT INTO songs_in_playlists VALUES (13, '3', '1');
INSERT INTO songs_in_playlists VALUES (14, '3', '4');
INSERT INTO songs_in_playlists VALUES (15, '6', '9');

CREATE TABLE interactions(
    interaction_id INT NOT NULL AUTO_INCREMENT,
    is_liked BOOLEAN NOT NULL,
    play_count INT NOT NULL,
    created_at DATE NOT NULL,
    user_id INT NOT NULL,
    song_id INT NOT NULL,
    PRIMARY KEY (interaction_id),
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (song_id) REFERENCES songs (song_id)
);
INSERT INTO interactions VALUES (1, TRUE, '9', '2020-08-21', '2', '10');
INSERT INTO interactions VALUES (2, TRUE, '3', '2020-11-15', '3', '6');
INSERT INTO interactions VALUES (3, FALSE, '5', '2020-12-17', '1', '4');
INSERT INTO interactions VALUES (4, TRUE, '6', '2020-10-13', '4', '10');
INSERT INTO interactions VALUES (5, FALSE, '2', '2020-09-04', '3', '3');
INSERT INTO interactions VALUES (6, TRUE, '1', '2020-08-04', '2', '11');
INSERT INTO interactions VALUES (7, TRUE, '8', '2020-07-08', '2', '3');
INSERT INTO interactions VALUES (8, TRUE, '14', '2020-06-08', '4', '8');
INSERT INTO interactions VALUES (9, FALSE, '16', '2020-05-04', '3', '7');
INSERT INTO interactions VALUES (10, TRUE, '13', '2020-04-27', '1', '1');
INSERT INTO interactions VALUES (11, FALSE, '4', '2020-03-24', '3', '2');
INSERT INTO interactions VALUES (12, TRUE, '8', '2020-02-29', '4', '5');
INSERT INTO interactions VALUES (13, TRUE, '3', '2020-01-30', '4', '5');
INSERT INTO interactions VALUES (14, FALSE, '2', '2020-09-21', '2', '11');
INSERT INTO interactions VALUES (15, FALSE, '6', '2020-04-18', '3', '10');
