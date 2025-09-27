'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Buses', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    registration: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    operator: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    routeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Routes',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
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
  await queryInterface.dropTable('Buses');
}