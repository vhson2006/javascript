module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reports', {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.UUID,
      },
      accountId: {
        type: Sequelize.UUID,
      },
      type: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      lateArrival: {
        type: Sequelize.INTEGER,
      },
      onTimeArrival: {
        type: Sequelize.INTEGER,
      },
      earlyLeave: {
        type: Sequelize.INTEGER,
      },
      onTimeLeave: {
        type: Sequelize.INTEGER,
      },
      lateAndEarly: {
        type: Sequelize.INTEGER,
      },
      notAttendance: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reports');
  },
};
