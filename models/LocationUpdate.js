import { DataTypes } from 'sequelize';
import  sequelize  from '../config/db.js';

const LocationUpdate = sequelize.define('LocationUpdate', {
  lat: { type: DataTypes.FLOAT, allowNull: false },
  longi: { type: DataTypes.FLOAT, allowNull: false },
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  speed: { type: DataTypes.FLOAT },
  tripId: { type: DataTypes.INTEGER, allowNull: true },
});

export default LocationUpdate;