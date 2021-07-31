'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('Users', [
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ], { transaction: t }),
        queryInterface.bulkInsert('Posts', [
          { id: 1, user_id: 1 },
          { id: 2, user_id: 2 },
          { id: 3, user_id: 3 },
        ], { transaction: t }),
        queryInterface.bulkInsert('Comments', [
          { id: 1, user_id: 1, post_id: 3 },
          { id: 2, user_id: 2, post_id: 1 },
          { id: 3, user_id: 3, post_id: 2 },
        ], { transaction: t }),
      ])
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkDelete('Users', null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        }),
        queryInterface.bulkDelete('Posts', null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        }),
        queryInterface.bulkDelete('Comments', null, {
          truncate: true,
          cascade: true,
          restartIdentity: true,
        }),
      ]);
    });
  }
};
