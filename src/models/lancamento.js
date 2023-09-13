const { INTEGER, DATE, FLOAT, STRING } = require('sequelize');
const { connection } = require('../database/connection');

const Record = connection.define(
  'records',
  {
    idUnit: {
      type: INTEGER,
      references: {
        model: {
          tableName: 'unidades',
        },
        key: 'id',
      },
    },
    date: STRING,
    total: FLOAT,
    createdAt: DATE,
    updatedAt: DATE,
  },
  { underscored: true, paranoid: true }
);

module.exports = { Record };
