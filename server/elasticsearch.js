const { Client } = require('@elastic/elasticsearch');
const { Song, Artist, Album, Playlist } = require('./models');
require('dotenv').config();

const client = new Client({
  cloud: {
    id: process.env.ELASTICSEARCH_CLOUD_ID,
  },
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME,
    password: process.env.ELASTICSEARCH_PASSWORD,
  },
});

// Copy all songs from MySQL server to ElasticSearch Cloud
const moveSongsDataFromSqlToElasticsearch = async () => {
  try {
    const allSongs = await Song.findAll({});
    const body = await allSongs.flatMap((doc) => [
      { index: { _index: 'songs' } },
      doc,
    ]);
    await client.bulk({ refresh: true, body });
    console.log('All songs added to elasticsearch');
  } catch (err) {
    console.log(err);
  }
};

// Copy all artists from MySQL server to ElasticSearch Cloud
const moveArtistsDataFromSqlToElasticsearch = async () => {
  try {
    const allArtists = await Artist.findAll({});
    const body = await allArtists.flatMap((doc) => [
      { index: { _index: 'artists' } },
      doc,
    ]);
    await client.bulk({ refresh: true, body });
    console.log('All artists added to elasticsearch');
  } catch (err) {
    console.log(err);
  }
};

// Copy all playlists from MySQL server to ElasticSearch Cloud
const movePlaylistsDataFromSqlToElasticsearch = async () => {
  try {
    const allPlaylists = await Playlist.findAll({});
    const body = await allPlaylists.flatMap((doc) => [
      { index: { _index: 'playlists' } },
      doc,
    ]);
    await client.bulk({ refresh: true, body });
    console.log('All playlists added to elasticsearch');
  } catch (err) {
    console.log(err);
  }
};

// Copy all albums from MySQL server to ElasticSearch Cloud
const moveAlbumsDataFromSqlToElasticsearch = async () => {
  try {
    const allAlbums = await Album.findAll({});
    const body = await allAlbums.flatMap((doc) => [
      { index: { _index: 'albums' } },
      doc,
    ]);
    await client.bulk({ refresh: true, body });
    console.log('All albums added to elasticsearch');
  } catch (err) {
    console.log(err);
  }
};

moveSongsDataFromSqlToElasticsearch();
moveAlbumsDataFromSqlToElasticsearch();
moveArtistsDataFromSqlToElasticsearch();
movePlaylistsDataFromSqlToElasticsearch();
