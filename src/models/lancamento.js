const { INTEGER, DATE, FLOAT } = require('sequelize');
const { connection } = require('../database/connection');

const Launch = connection.define(
  'Launch',
  {
    id_unit: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'unidades',
        },
        key: 'id',
      },
    },
    date: DATE,
    total: FLOAT,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = { Launch };
