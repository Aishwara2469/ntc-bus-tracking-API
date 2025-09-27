'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Routes', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    routeNumber: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    start: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    end: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    stops: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Routes');
}