import { DataTypes } from 'sequelize';
import { define } from '../config/db';

const Bus = define('Bus', {
  registration: { type: DataTypes.STRING, allowNull: false, unique: true },
  operator: { type: DataTypes.STRING, allowNull: false },
});

export default Bus;