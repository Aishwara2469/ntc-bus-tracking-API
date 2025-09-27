import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql',
    ssl: true, 
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true 
      }
    },
    logging: false,
  }
);

export default sequelize;