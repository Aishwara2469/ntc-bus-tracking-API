
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Route = sequelize.define('Route', {
  name: { type: DataTypes.STRING, allowNull: false },
  start: { type: DataTypes.STRING, allowNull: false },
  end: { type: DataTypes.STRING, allowNull: false },
  distance: { type: DataTypes.FLOAT },
});

export default Route;