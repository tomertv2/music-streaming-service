'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Song, {
        through: models.PlaylistSong,
        foreignKey: 'playlistId'
      });
    }
  }
  Playlist.init(
    {
      playlistName: DataTypes.STRING,
      coverImg: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Playlist',
    }
  );
  return Playlist;
};
