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
INSERT INTO users VALUES (2, 'user2', 'user2@example.co', '2020-04-23', '2020-06-17', 'pa55w0rd2', FALSE, '{"fav_artist": "billie eilish", "fav_genre": "pop"}', TRUE);
INSERT INTO users VALUES (3, 'user3', 'user3@example.co', '2020-02-01', '2020-05-23', 'pa55w0rd3', FALSE, '{"fav_artist": "dekel vaknin", "fav_genre": "mizrahit"}', FALSE);
INSERT INTO users VALUES (4, 'admin', 'admin@example.co', '2019-10-13', '2020-01-05', 'adm1npa55w0rd', TRUE, '{"fav_artist": "maluma", "fav_genre": "pop"}', TRUE);

CREATE TABLE artists(
    artist_id INT NOT NULL AUTO_INCREMENT,
    artist_name VARCHAR(255) NOT NULL,
    cover_img VARCHAR(255) NULL,
    upload_at DATE NOT NULL,
    PRIMARY KEY (artist_id)
);
INSERT INTO artists VALUES (1, 'arctic monkeys', 'https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d', '2002-12-10');
INSERT INTO artists VALUES (2, 'solomun', 'shorturl.at/enDPR', '2000-10-21');
INSERT INTO artists VALUES (3, 'cardi b', 'shorturl.at/nuAS7', '2016-04-16');
INSERT INTO artists VALUES (4, 'maluma', 'shorturl.at/nuOU7', '2014-07-17');
INSERT INTO artists VALUES (5, 'ed shiran', 'shorturl.at/bcpH2', '2012-02-18');
INSERT INTO artists VALUES (6, 'zedd', 'https://i.scdn.co/image/3eb1e503551823111362b5bfc69cd1624ccd5593', '2005-08-10');
INSERT INTO artists VALUES (7, 'billie eilish', 'https://i.scdn.co/image/022d340319cc6c57ed953075f4c7a2d3346669af', '2010-09-19');
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
INSERT INTO albums VALUES (8, 'true colors', 'https://i.scdn.co/image/ab67616d00001e02d040bc5b46915b49a64d7b1d', '2019-11-06', '2020-11-05', '6');
INSERT INTO albums VALUES (9, 'AM', 'https://upload.wikimedia.org/wikipedia/he/0/04/Arctic_Monkeys_-_AM.png', '2019-12-03', '2020-12-18', '1');
INSERT INTO albums VALUES (10, 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?', 'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce', '2019-03-23', '2020-09-15', '7');

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
INSERT INTO songs VALUES (1, 'Do I Wanna Know?', '00:03:20', 'https://www.youtube.com/watch?v=bpOSxM0rNPM&ab_channel=OfficialArcticMonkeys', '1', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '9', '1');
INSERT INTO songs VALUES (2, 'R U Mine?', '00:05:27', 'https://www.youtube.com/watch?v=ngzC_8zqInk&ab_channel=RodrigoLima', '2', 'what a cool lyrics...', '2019-05-17', '2020-05-21', '9', '1');
INSERT INTO songs VALUES (3, 'One for the Road', '00:04:15', 'https://www.youtube.com/watch?v=qN7gSMPQFss&ab_channel=OfficialArcticMonkeys', '3', 'what a cool lyrics...', '2019-02-04', '2020-02-14', '9', '1');
INSERT INTO songs VALUES (4, 'Arabella', '00:04:49', 'https://www.youtube.com/watch?v=Jn6-TItCazo&ab_channel=OfficialArcticMonkeys', '4', 'what a cool lyrics...', '2019-08-16', '2020-05-17', '9', '1');
INSERT INTO songs VALUES (5, 'I Want It All', '00:03:59', 'https://www.youtube.com/watch?v=aNNExOnxxWA&ab_channel=ArcticMonkeys-Topic', '5', 'what a cool lyrics...', '2019-09-28', '2020-09-18', '9', '1');
INSERT INTO songs VALUES (6, 'No. 1 Party Anthem', '00:04:36', 'https://www.youtube.com/watch?v=pDYlWAf-ekk&ab_channel=MariannaPaschalidou', '6', 'what a cool lyrics...', '2019-12-03', '2020-11-05', '9', '1');
INSERT INTO songs VALUES (7, 'Mad Sounds', '00:02:26', 'https://www.youtube.com/watch?v=iP9zhCA9AfQ&ab_channel=MariannaPaschalidou', '7', 'what a cool lyrics...', '2019-11-30', '2020-10-03', '9', '1');
INSERT INTO songs VALUES (8, 'Fireside', '00:05:14', 'https://www.youtube.com/watch?v=8-LewaeKejM&ab_channel=ArcticMonkeys-Topic', '8', 'what a cool lyrics...', '2019-10-16', '2020-02-02', '9', '1');
INSERT INTO songs VALUES (9, 'Why\'d You Only Call Me When You\'re High?', '00:04:06', 'https://www.youtube.com/watch?v=6366dxFf-Os&ab_channel=ArcticMonkeysVEVO', '9', 'what a cool lyrics...', '2019-01-23', '2020-04-09', '9', '1');
INSERT INTO songs VALUES (10, 'Snap Out of It', '00:04:08', 'https://www.youtube.com/watch?v=yfrEMQgBc2Y&ab_channel=ArcticMonkeys-Topic', '10', 'what a cool lyrics...', '2019-02-21', '2020-02-25', '9', '1');
INSERT INTO songs VALUES (11, 'Knee Socks', '00:03:36', 'https://www.youtube.com/watch?v=R7A1mIdiheE&ab_channel=RodrigoLima', '11', 'what a cool lyrics...', '2019-07-07', '2020-01-30', '9', '1');
INSERT INTO songs VALUES (12, 'I Wanna Be Yours', '00:03:36', 'https://www.youtube.com/watch?v=fJLQCf4mFP0&ab_channel=RodrigoLima', '11', 'what a cool lyrics...', '2019-07-07', '2020-01-30', '9', '1');
INSERT INTO songs VALUES (13, '!!!!!!!', '00:00:14', 'https://www.youtube.com/watch?v=XJBUWZsT38c&ab_channel=BillieEilish-Topic', '1', 'My Invisalign has finally...\nI have taken out my Invisalign\nI have taken out my Invisalign, and this is the album\nHahahahahahahahahahaha, ahh', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (14, 'bad guy', '00:03:14', 'https://www.youtube.com/watch?v=DyDfgMOUjCI&ab_channel=BillieEilishVEVO', '2', '[Verse 1]\nWhite shirt now red, my bloody nose\nSleepin\', you\'re on your tippy toes\nCreepin\' around like no one knows\nThink you\'re so criminal\nBruises on both my knees for you\nDon\'t say thank you or please\nI do what I want when I\'m wanting to\nMy soul? So cynical\n\n[Chorus]\nSo you\'re a tough guy\nLike it really rough guy\nJust can\'t get enough guy\nChest always so puffed guy\nI\'m that bad type\nMake your mama sad type\nMake your girlfriend mad tight\nMight seduce your dad type\nI\'m the bad guy\nDuh\n\n[Post-Chorus]\nI\'m the bad guy\n\n[Verse 2]\nI like it when you take control\nEven if you know that you don\'t\nOwn me, I\'ll let you play the role\nI\'ll be your animal\nMy mommy likes to sing along with me\nBut she won\'t sing this song\nIf she reads all the lyrics\nShe\'ll pity the men I know\n\n[Chorus]\nSo you\'re a tough guy\nLike it really rough guy\nJust can\'t get enough guy\nChest always so puffed guy\nI\'m that bad type\nMake your mama sad type\nMake your girlfriend mad tight\nMight seduce your dad type\nI\'m the bad guy\nDuh\n\n[Post-Chorus]\nI\'m the bad guy, duh\nI\'m only good at bein\' bad, bad\n\n[Bridge]\nI like when you get mad\nI guess I\'m pretty glad that you\'re alone\nYou said she\'s scared of me?\nI mean, I don\'t see what she sees\nBut maybe it\'s \'cause I\'m wearing your cologne\n\n[Outro]\nI\'m a bad guy\nI\'m, I\'m a bad guy\nBad guy, bad guy\nI\'m a bad', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (15, 'xanny', '00:04:04', 'https://www.youtube.com/watch?v=LZyybvVx-js&ab_channel=BillieEilishVEVO', '3', '[Verse 1]\nWhat is it about them?\nI must be missing something\nThey just keep doing nothing\nToo intoxicated to be scared\nBetter off without them\nThey\'re nothing but unstable\nBring ashtrays to the table\nAnd that\'s about the only thing they share\n\n[Chorus]\nI\'m in their secondhand smoke\nStill just drinking canned Coke\nI don\'t need a Xanny to feel better\nOn designated drives home\nOnly one who\'s not stoned\nDon\'t give me a Xanny, now or ever\n\n[Interlude]\nCan you check your Uber rating? Oh my god\n(And it\'s like, wait, like, when?)\n\n[Verse 2]\nWakin\' up at sundown (Ooh)\nThey\'re late to every party (Ooh)\nNobody\'s ever sorry (Ooh)\nToo inebriated now to dance\nMorning as they come down (Come down)\nTheir pretty heads are hurting (Hurting)\nThey\'re awfully bad at learning (Learning)\nMake the same mistakes, blame circumstance\n\n[Chorus]\nI\'m in their secondhand smoke\nStill just drinking canned Coke\nI don\'t need a Xanny to feel better\nOn designated drives home\nOnly one who\'s not stoned\nDon\'t give me a Xanny, now or ever\n\n[Bridge]\nPlease don\'t try to kiss me on the sidewalk\nOn your cigarette break\nI can\'t afford to love someone\nWho isn\'t dying by mistake in Silver Lake\n\n[Outro]\nWhat is it about them?\nI must be missing something\nThey just keep doin\' nothing\nToo intoxicated to be scared\nHmm, hmm\nHmm, mmm, mmm, mmm, mmm\nCome down\nHurting\nLearning', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (16, 'You should see me in a crown', '00:03:01', 'https://www.youtube.com/watch?v=Ah0Ys50CqO8&ab_channel=BillieEilish', '4', '[Verse 1]\nBite my tongue, bide my time\nWearing a warning sign\nWait \'til the world is mine\nVisions I vandalize\nCold in my kingdom size\nFell for these ocean eyes\n\n[Chorus]\nYou should see me in a crown\nI\'m gonna run this nothing town\nWatch me make \'em bow\nOne by one by one\nOne by one by\nYou should see me in a crown\nYour silence is my favorite sound\nWatch me make \'em bow\nOne by one by one\nOne by one by one\n\n[Verse 2]\nCount my cards, watch them fall\nBlood on a marble wall\nI like the way they all scream\nTell me which one is worse\nLiving or dying first\nSleeping inside a hearse (I don\'t dream)\n\n[Bridge]\nYou say, \"Come over, baby\nI think you\'re pretty\"\nI\'m okay, I\'m not your baby\nIf you think I\'m pretty\n\n[Chorus]\nYou should see me in a crown\nI\'m gonna run this nothing town\nWatch me make \'em bow\nOne by one by one\nOne by one by\nYou should see me in a crown\nYour silence is my favorite sound\nWatch me make \'em bow\nOne by one by one\nOne by one by one\n\n[Instrumental Break]\n\n[Chorus]\nCrown\nI\'m gonna run this nothing town\nWatch me make \'em bow\nOne by one by one\nOne by one by\nYou should see me in a crown (You should see me, see me)\nYour silence is my favorite sound (You should see me, see me)\nWatch me make \'em bow\nOne by one by one\nOne by one by one', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (17, 'all the good girls go to hell', '00:02:49', 'https://www.youtube.com/watch?v=-PZsSWwc9xA&ab_channel=BillieEilishVEVO', '5', '[Intro]\nMy Lucifer is lonely\n\n[Verse 1]\nStanding there, killing time\nCan\'t commit to anything but a crime\nPeter\'s on vacation, an open invitation\nAnimals, evidence\nPearly Gates look more like a picket fence\nOnce you get inside \'em\nGot friends but can\'t invite them\n\n[Pre-Chorus]\nHills burn in California\nMy turn to ignore ya\nDon\'t say I didn\'t warn ya\n\n[Chorus]\nAll the good girls go to Hell\n\'Cause even God herself has enemies\nAnd once the water starts to rise\nAnd Heaven\'s out of sight\nShe\'ll want the Devil on her team\n\n[Post-Chorus]\nMy Lucifer is lonely\n\n[Verse 2]\nLook at you needing me\nYou know I\'m not your friend without some greenery\nWalk in wearin\' fetters\nPeter should know better\nYour cover up is caving in\nMan is such a fool, why are we saving him?\nPoisoning themselves now\nBegging for our help, wow\n\n[Pre-Chorus]\nHills burn in California\nMy turn to ignore ya\nDon\'t say I didn\'t warn ya\n\n[Chorus]\nAll the good girls go to Hell (All the good girls go to Hell)\n\'Cause even God herself (God herself) has enemies\nAnd once the water starts to rise (Water starts to rise)\nAnd Heaven\'s out of sight\nShe\'ll want the Devil on her team\n\n[Post-Chorus]\nMy Lucifer is lonely\nThere\'s nothing left to save now\nMy god is gonna owe me\nThere\'s nothing left to save now\n\n[Outro]\nHaha!\nI cannot do the snowflake', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (18, 'wish you were gay', '00:03:42', 'https://www.youtube.com/watch?v=yaJx0Gj_LCY&ab_channel=BillieEilishVEVO', '6', '[Verse 1]\n\"Baby, I don\'t feel so good,\" six words you never understood\n\"I\'ll never let you go,\" five words you\'ll never say (Aww)\nI laugh along like nothing\'s wrong, four days has never felt so long\nIf three\'s a crowd and two was us, one slipped away (Hahahahahahahaha)\n\n[Chorus]\nI just wanna make you feel okay\nBut all you do is look the other way\nI can\'t tell you how much I wish I didn\'t wanna stay\nI just kinda wish you were gay\n\n[Verse 2]\nIs there a reason we\'re not through?\nIs there a 12 step just for you?\nOur conversation\'s all in blue\n11 \"heys\" (Hey, hey, hey, hey)\nTen fingers tearin\' out my hair\nNine times you never made it there\nI ate alone at 7, you were six minutes away\n(Yay)\n\n[Chorus]\nHow am I supposed to make you feel okay\nWhen all you do is walk the other way?\nI can\'t tell you how much I wish I didn\'t wanna stay\nI just kinda wish you were gay\n\n[Bridge]\nTo spare my pride\nTo give your lack of interest an explanation\nDon\'t say I\'m not your type\nJust say that I\'m not your preferred sexual orientation\nI\'m so selfish\nBut you make me feel helpless, yeah\nAnd I can\'t stand another day\nStand another day\n\n[Chorus]\nI just wanna make you feel okay\nBut all you do is look the other way, hmm\nI can\'t tell you how much I wish I didn\'t wanna stay\nI just kinda wish you were gay\nI just kinda wish you were gay\nI just kinda wish you were gay', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (19, 'when the party\'s over', '00:03:16', 'https://www.youtube.com/watch?v=pbMwTqkKSps&ab_channel=BillieEilishVEVO', '7', '[Verse 1]\nDon\'t you know I\'m no good for you?\nI\'ve learned to lose you, can\'t afford to\nTore my shirt to stop you bleedin\'\nBut nothin\' ever stops you leavin\'\n\n[Chorus]\nQuiet when I\'m coming home and I\'m on my own\nI could lie, say I like it like that, like it like that\nI could lie, say I like it like that, like it like that\n\n[Verse 2]\nDon\'t you know too much already?\nI\'ll only hurt you if you let me\nCall me friend, but keep me closer (Call me back)\nAnd I\'ll call you when the party\'s over\n\n[Chorus]\nQuiet when I\'m coming home and I\'m on my own\nAnd I could lie, say I like it like that, like it like that\nYeah, I could lie, say I like it like that, like it like that\n\n[Bridge]\nBut nothin\' is better sometimes\nOnce we\'ve both said our goodbyes\nLet\'s just let it go\nLet me let you go\n\n[Chorus]\nQuiet when I\'m coming home and I\'m on my own\nI could lie, say I like it like that, like it like that\nI could lie, say I like it like that, like it like that', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (20, '8', '00:02:53', 'https://www.youtube.com/watch?v=kdgN86GTttU&ab_channel=ShadowMusic', '8', '[Verse 1]\nWait a minute, let me finish\nI know you don\'t care\nBut can you listen?\nI came committed, guess I overdid it\nWore my heart out on a chain\nAround my neck, but now it\'s missin\', hmm\n\n[Refrain]\nDa-da-da-da-da-da (Hmm)\nDa-da-da-da-da-da-da (Hmm, hmm, hmm, hmm)\nOh, hmm, hmm\n\n[Chorus]\nSo I think I better go\nI never really know how to please you\nYou\'re lookin\' at me like I\'m see-through\nI guess I\'m gonna go\nI just never know how you feel\nDo you even feel anything?\n\n[Refrain]\nDa-da-da-da-da-da-da\nDa-da-da-da-da-da-da\nOh, hmm, hmm\n\n[Verse 2]\nYou said, \"Don\'t treat me badly\"\nBut you said it so sadly\nSo I did the best I could\nNot thinkin\' you would have left me gladly\nI know you\'re not sorry\nWhy should you be?\n\'Cause who am I to be in love\nWhen your love never is for me?\nMe\n\n[Refrain]\nDa-da-da-da-da-da-da (Hmm)\nDa-da-da-da-da-da-da (Hmm, hmm, hmm, hmm)\nOh, hmm, hmm\n\n[Chorus]\nSo I think I better go\nI never really know how to please you\nYou\'re lookin\' at me like I\'m see-through\nI guess I\'m gonna go\nI just never know how you feel\nDo you even feel anything?', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (21, 'my strange addiction', '00:03:00', 'https://www.youtube.com/watch?v=IiIDghGyy7Y&ab_channel=ShadowMusic', '9', '[Intro]\nNo, Billy, I haven\'t done that dance since my wife died\nThere’s a whole crowd of people out there who need to learn how to do The Scarn\n\n[Verse 1]\nDon\'t ask questions you don\'t wanna know\nLearned my lesson way too long ago\nTo be talkin’ to you, belladonna\nShoulda taken a break, not an Oxford comma\nTake what I want when I wanna\nAnd I want ya\n\n[Pre-Chorus]\nBad, bad news\nOne of us is gonna lose\nI\'m the powder, you\'re the fuse\nJust add some friction\n\n[Chorus]\nYou are my strange addiction\nYou are my strange addiction\nMy doctors can\'t explain\nMy symptoms or my pain\nBut you are my strange addiction\n\n[Interlude]\nI\'m really, really sorry, I think I was just relieved\nTo see that Michael Scarn got his confidence back\nYeah, Michael, the movie is amazing\nIt\'s like, one of the best movies I\'ve ever seen in my life\n\n[Verse 2]\nDeadly fever, please don\'t ever break\nBe my reliever ’cause I don’t self medicate\nAnd it burns like a gin and I like it\nPut your lips on my skin and you might ignite it\nHurts, but I know how to hide it, kinda like it (Teh)\n\n[Pre-Chorus]\nBad, bad news\nOne of us is gonna lose\nI\'m the powder, you’re the fuse\nJust add some friction\n\n[Chorus]\nYou are my strange addiction\nYou are my strange addiction\nMy doctors can\'t explain\nMy symptoms or my pain\nBut you are my strange addiction\n\n[Bridge]\nBite my glass, set myself on fire\nCan\'t you tell I\'m crass? Can’t you tell I\'m wired?\nTell me nothing lasts, like I don\'t know\nYou could kiss my— asking about my motto\n\n[Interlude]\nYou should enter it in festivals or carnivals\nThoughts? Pretty good reaction\nPretty cool... right?\n\n[Chorus]\nYou are my strange addiction\nYou are my strange addiction\nMy doctors can\'t explain\nMy symptoms or my pain\nBut you are my strange addiction\n\n[Outro]\nDid you like it? Did you like that?\nUm, which part?', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (22, 'bury a friend', '00:03:13', 'https://www.youtube.com/watch?v=HUHC9tYz8ik&ab_channel=BillieEilishVEVO', '10', '[Intro: Mehki Raine]\nBillie\n\n[Chorus: Billie Eilish]\nWhat do you want from me? Why don\'t you run from me?\nWhat are you wondering? What do you know?\nWhy aren\'t you scared of me? Why do you care for me?\nWhen we all fall asleep, where do we go?\n\n[Verse 1: Billie Eilish & Mehki Raine]\nCome here\nSay it, spit it out, what is it exactly\nYou\'re payin\'? Is the amount cleanin\' you out? Am I satisfactory?\nToday, I\'m thinkin\' about the things that are deadly\nThe way I\'m drinkin\' you down\nLike I wanna drown, like I wanna end me\n\n[Refrain: Billie Eilish]\nStep on the glass, staple your tongue (Ahh)\nBury a friend, try to wake up (Ah-ahh)\nCannibal class, killing the son (Ahh)\nBury a friend, I wanna end me\n\n[Pre-Chorus: Billie Eilish]\nI wanna end me\nI wanna, I wanna, I wanna… end me\nI wanna, I wanna, I wanna…\n\n[Chorus: Billie Eilish]\nWhat do you want from me? Why don\'t you run from me?\nWhat are you wondering? What do you know?\nWhy aren\'t you scared of me? Why do you care for me?\nWhen we all fall asleep, where do we go?\n\n[Verse 2: Billie Eilish & Mehki Raine]\nListen\nKeep you in the dark, what had you expected?\nMe to make you my art and make you a star\nAnd get you connected?\nI\'ll meet you in the park, I\'ll be calm and collected\nBut we knew right from the start that you\'d fall apart\n\'Cause I\'m too expensive\nIt\'s probably somethin\' that shouldn\'t be said out loud\nHonestly, I thought that I would be dead by now (Wow)\nCalling security, keepin\' my head held down\nBury the hatchet or bury a friend right now\n\n[Bridge: Billie Eilish & Mehki Raine]\nThe debt I owe, gotta sell my soul\n\'Cause I can\'t say no, no, I can\'t say no\nThen my limbs all froze and my eyes won\'t close\nAnd I can\'t say no, I can\'t say no\nCareful\n\n[Refrain: Billie Eilish]\nStep on the glass, staple your tongue (Ahh)\nBury a friend, try to wake up (Ah-ahh)\nCannibal class, killing the son (Ahh)\nBury a friend, I wanna end me\n\n[Pre-Chorus: Billie Eilish]\nI wanna end me\nI wanna, I wanna, I wanna… end me\nI wanna, I wanna, I wanna…\n\n[Chorus: Billie Eilish]\nWhat do you want from me? Why don\'t you run from me?\nWhat are you wondering? What do you know?\nWhy aren\'t you scared of me? Why do you care for me?\nWhen we all fall asleep, where do we go?\n\n', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (23, 'ilomilo', '00:02:36', 'https://www.youtube.com/watch?v=-e7wiyNO2us&ab_channel=BillieEilishVEVO', '11', '[Verse 1]\nTold you not to worry\nBut maybe that\'s a lie\nHoney, what\'s your hurry?\nWon\'t you stay inside?\nRemember not to get too close to stars\nThey\'re never gonna give you love like ours\n\n[Chorus]\nWhere did you go?\nI should know, but it\'s cold\nAnd I don\'t wanna be lonely\nSo show me the way home\nI can\'t lose another life\n\n[Refrain]\nHurry, I\'m worried\n\n[Verse 2]\nThe world\'s a little blurry\nOr maybe it\'s my eyes\nThe friends I\'ve had to bury\nThey keep me up at night\nSaid I couldn\'t love someone\n\'Cause I might break\nIf you\'re gonna die, not by mistake\n\n[Chorus]\nSo, where did you go?\nI should know, but it\'s cold\nAnd I don\'t wanna be lonely\nSo tell me you\'ll come home\nEven if it\'s just a lie\n\n[Bridge]\nI tried not to upset you\nLet you rescue me the day I met you\nI just wanted to protect you\nBut now I\'ll never get to\n\n[Refrain]\nHurry, I\'m worried\n\n[Outro]\nWhere did you go?\nI should know, but it\'s cold\nAnd I don\'t wanna be lonely\nWas hoping you\'d come home\nI don\'t care if it\'s a lie', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (24, 'listen before i go', '00:04:03', 'https://www.youtube.com/watch?v=P4z1O3miesI&ab_channel=BillieEilish-Topic', '12', '[Verse 1]\nTake me to the rooftop\nI wanna see the world when I stop breathing\nTurnin\' blue\nTell me love is endless, don\'t be so pretentious\nLeave me like you do (Like you do)\n\n[Pre-Chorus]\nIf you need me, wanna see me\nBetter hurry \'cause I\'m leavin\' soon\n\n[Chorus]\nSorry can\'t save me now\nSorry I don\'t know how\nSorry there\'s no way out (Sorry)\nBut down\nHmm, down\n\n[Verse 2]\nTaste me, the salty tears on my cheek\nThat\'s what a year-long headache does to you\nI\'m not okay, I feel so scattered\nDon\'t say I\'m all that matters\nLeave me, déjà vu (Hmm)\n\n[Pre-Chorus]\nIf you need me, wanna see me\nYou better hurry, I\'m leavin\' soon\n\n[Chorus]\nSorry can\'t save me now (Sorry)\nSorry I don\'t know how (Sorry)\nSorry there\'s no way out (Sorry)\nBut down\nHmm, down\n\n[Outro]\nCall my friends and tell them that I love them\nAnd I\'ll miss them\nBut I\'m not sorry\nCall my friends and tell them that I love them\nAnd I\'ll miss them\nSorry', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (25, 'i love you', '00:04:52', 'https://www.youtube.com/watch?v=Fvj6PE3gN4o&ab_channel=ShadowMusic', '13', '[Verse 1]\nIt\'s not true\nTell me I’ve been lied to\nCrying isn\'t like you, ooh\nWhat the hell did I do?\nNever been the type to\nLet someone see right through, ooh\n\n[Chorus]\nMaybe won\'t you take it back?\nSay you were tryna make me laugh\nAnd nothing has to change today\nYou didn’t mean to say \"I love you\"\nI love you and I don\'t want to, ooh\n\n[Verse 2]\nUp all night on another red-eye\nI wish we never learned to fly\nMaybe we should just try\nTo tell ourselves a good lie\nDidn\'t mean to make you cry\n\n[Chorus]\nMaybe won\'t you take it back?\nSay you were tryna make me laugh\nAnd nothing has to change today\nYou didn\'t mean to say \"I love you\"\nI love you and I don\'t want to, ooh\n\n[Bridge]\nThe smile that you gave me\nEven when you felt like dying\n\n[Outro]\nWe fall apart as it gets dark\nI\'m in your arms in Central Park\nThere\'s nothing you could do or say\nI can’t escape the way I love you\nI don’t want to, but I love you, ooh\nOoh, ooh\nOoh, ooh', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (26, 'goodbye', '00:01:59', 'https://www.youtube.com/watch?v=vciZvVJyNYU&ab_channel=BillieEilish-Topic', '14', '[Intro]\nPlease, please\nDon\'t leave﻿ me\nBe\n\n[Verse]\nIt\'s not true\nTake me to the rooftop\nTold you not to worry\nWhat do you want from me?\nDon\'t ask questions\nWait a minute\nDon\'t you know I\'m no good for you?\nBaby, I don\'t feel so good\nAnd all the good girls go ﻿to Hell\nBite my tongue, bide my time\nWhat is it about them?\nI\'m the bad guy', '2019-03-23', '2020-09-15', '10', '7');
INSERT INTO songs VALUES (27, 'Addicted To A Memory', '00:03:20', 'https://www.youtube.com/watch?list=LL4QRDhZ-1hka7FifRfmu-7w&v=ZqJiXLJs_Pg&ab_channel=ZEDDVEVO', '1', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (28, 'I want you to know', '00:03:20', 'https://www.youtube.com/watch?v=X46t8ZFqUB4&ab_channel=ZEDDVEVO', '2', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (29, 'beautiful now', '00:03:20', 'https://www.youtube.com/watch?v=n1a7o44WxNo&ab_channel=ZEDDVEVO', '3', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (30, 'Transmission', '00:03:20', 'https://www.youtube.com/watch?v=hVHZI_IydU8&ab_channel=ZEDDVEVO', '4', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (31, 'Done with Love', '00:03:20', 'https://www.youtube.com/watch?v=BjsjIkSb0cM&ab_channel=ZEDDVEVO', '5', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (32, 'True colors', '00:03:20', 'https://www.youtube.com/watch?v=weEV0Jf0Urk&ab_channel=ZEDDVEVO', '6', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (33, 'Straight Into The Fire', '00:03:20', 'https://www.youtube.com/watch?v=JoE1p7Vhcco&ab_channel=Zedd-Topic', '7', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (34, 'papercut', '00:03:20', 'https://www.youtube.com/watch?v=HwtljkGZJnI&ab_channel=ZEDDVEVO', '8', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (35, 'bumble bee', '00:03:20', 'https://www.youtube.com/watch?v=scvI5tV9Jk0&ab_channel=ZEDDVEVO', '9', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (36, 'daisy', '00:03:20', 'https://www.youtube.com/watch?v=CMNBjZBBKPw&ab_channel=ZEDDVEVO', '10', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');
INSERT INTO songs VALUES (37, 'Illusion', '00:03:20', 'https://www.youtube.com/watch?v=kDy5INkW33A&ab_channel=IsaacFierro', '11', 'what a cool lyrics...', '2019-06-07', '2020-12-26', '8', '6');

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
