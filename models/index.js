import sequelize from '../config/db.js';
import User from './User.js';
import Route from './Route.js';
import Bus from './Bus.js';
import Trip from './Trip.js';
import LocationUpdate from './LocationUpdate.js';


Bus.belongsTo(Route, { foreignKey: 'routeId' });
Trip.belongsTo(Bus, { foreignKey: 'busId' });
Trip.belongsTo(Route, { foreignKey: 'routeId' });
LocationUpdate.belongsTo(Trip, { foreignKey: 'tripId' });
User.hasMany(Bus, { foreignKey: 'operatorId' });

export { sequelize, User, Route, Bus, Trip, LocationUpdate };