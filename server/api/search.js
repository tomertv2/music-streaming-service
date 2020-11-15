const { Router } = require('express');
const { Client } = require('@elastic/elasticsearch');

const router = Router();

const client = new Client({
  cloud: {
    id: process.env.ELASTICSEARCH_CLOUD_ID,
  },
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME,
    password: process.env.ELASTICSEARCH_PASSWORD,
  },
});

// GET all the 3 search results for every section
router.get('/', async (req, res) => {
  const searchQuery = req.query.q;
  const searchRegex = `.*${searchQuery}.*`;

  const { body: searchResultSongs } = await client.search({
    index: 'songs',
    body: {
      query: {
        match: { title: searchRegex },
      },
      size: 3,
    },
  });

  const { body: searchResultAlbums } = await client.search({
    index: 'albums',
    body: {
      query: {
        match: { albumName: searchRegex },
      },
      size: 3,
    },
  });

  const { body: searchResultPlaylists } = await client.search({
    index: 'playlists',
    body: {
      query: {
        match: { playlistName: searchRegex },
      },
      size: 3,
    },
  });

  const { body: searchResultArtists } = await client.search({
    index: 'artists',
    body: {
      query: {
        match: { artistName: searchRegex },
      },
      size: 3,
    },
  });

  res.json({
    songs: searchResultSongs.hits.hits.map((song) => song._source),
    albums: searchResultAlbums.hits.hits.map((album) => album._source),
    playlists: searchResultPlaylists.hits.hits.map((playlist) => playlist._source),
    artists: searchResultArtists.hits.hits.map((artist) => artist._source),
  });
});

// GET songs search results
router.get('/songs-results', async (req, res) => {
  const searchQuery = req.query.q;
  const searchRegex = `.*${searchQuery}.*`;

  const { body: searchResultSongs } = await client.search({
    index: 'songs',
    body: {
      query: {
        match: { title: searchRegex },
      },
      size: 20,
    },
  });

  res.json(searchResultSongs.hits.hits.map((song) => song._source));
});

// GET albums search results
router.get('/albums-results', async (req, res) => {
  const searchQuery = req.query.q;
  const searchRegex = `.*${searchQuery}.*`;

  const { body: searchResultAlbums } = await client.search({
    index: 'albums',
    body: {
      query: {
        match: { albumName: searchRegex },
      },
      size: 20,
    },
  });

  res.json(searchResultAlbums.hits.hits.map((album) => album._source));
});

// GET playlists search results
router.get('/playlists-results', async (req, res) => {
  const searchQuery = req.query.q;
  const searchRegex = `.*${searchQuery}.*`;

  const { body: searchResultPlaylists } = await client.search({
    index: 'playlists',
    body: {
      query: {
        match: { playlistName: searchRegex },
      },
      size: 20,
    },
  });

  res.json(searchResultPlaylists.hits.hits.map((playlist) => playlist._source));
});

// GET artists search results
router.get('/artists-results', async (req, res) => {
  const searchQuery = req.query.q;
  const searchRegex = `.*${searchQuery}.*`;

  const { body: searchResultArtists } = await client.search({
    index: 'artists',
    body: {
      query: {
        match: { artistName: searchRegex },
      },
      size: 20,
    },
  });

  res.json(searchResultArtists.hits.hits.map((artist) => artist._source));
});

module.exports = router;
