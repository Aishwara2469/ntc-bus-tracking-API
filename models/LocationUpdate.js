import { DataTypes } from 'sequelize';
import { define } from '../config/db.js';

const LocationUpdate = define('LocationUpdate', {
  lat: { type: DataTypes.FLOAT, allowNull: false },
  long: { type: DataTypes.FLOAT, allowNull: false },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  speed: { type: DataTypes.FLOAT },
});

export default LocationUpdate;