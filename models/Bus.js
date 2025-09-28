import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

const Bus = sequelize.define('Bus', {
  registration: { type: DataTypes.STRING, allowNull: false, unique: true },
  operatorId: { type: DataTypes.INTEGER, allowNull: true },
  routeId: { type: DataTypes.INTEGER, allowNull: true },
});

export default Bus;