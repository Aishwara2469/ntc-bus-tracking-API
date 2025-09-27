import { DataTypes } from "sequelize";
import { define } from "../config/db.js";
import { toDefaultValue } from "sequelize/lib/utils";

const Trip = define("Trip", {
    username : {type:DataTypes.STRING,allowNull:false,unique:true},
    password:{type:DataTypes.STRING,allowNull:false},
    role : {type:DataTypes.ENUM('admin','operator','commuter'),defaultValue :'commuter' },
});

export default User;
