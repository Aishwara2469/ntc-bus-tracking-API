import { DataTypes } from "sequelize";
import { define } from "../config/db.js";

const Trip = define("Trip", {
    scheduledStart : { type: DataTypes.DATE, allowNull: false },
    scheduledEnd : { type: DataTypes.DATE, allowNull: false },
    status : {type: DataTypes.ENUM('scheduled','in_progress','completed','delayed','cancelled'),defaultValue: 'scheduled'},
});

export default Trip;