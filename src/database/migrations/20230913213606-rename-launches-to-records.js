'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('launches', 'records');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable('records', 'launches');
  },
};
