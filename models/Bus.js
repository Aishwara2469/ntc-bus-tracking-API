import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; 

const Bus = sequelize.define('Bus', {
  registration: { type: DataTypes.STRING, allowNull: false, unique: true },
  operator: { type: DataTypes.STRING, allowNull: false },
});

export default Bus;