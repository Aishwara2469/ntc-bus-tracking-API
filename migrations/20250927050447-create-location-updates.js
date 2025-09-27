'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('LocationUpdates', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tripId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Trips',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    lat: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    long: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    timestamp: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    speed: {
      type: Sequelize.FLOAT,
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
  await queryInterface.dropTable('LocationUpdates');
}