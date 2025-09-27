'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Trips', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    busId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Buses',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
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
    scheduledStart: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    scheduledEnd: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('scheduled', 'in_progress', 'completed', 'delayed', 'cancelled'),
      defaultValue: 'scheduled',
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
  await queryInterface.dropTable('Trips');
}