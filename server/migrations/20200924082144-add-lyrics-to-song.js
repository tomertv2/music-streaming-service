'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'Songs', // table name
      'lyrics', // new field name
      {
        type: Sequelize.TEXT,
        allowNull: true,
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Songs', // table name
      'lyrics', // new field name
    )
  }
};
