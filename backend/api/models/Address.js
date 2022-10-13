const {Model, DataTypes} = require('sequelize'); 
const db= require("../db");


class Address extends Model {}

Address.init(
    {
        calle:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        altura:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        localidad:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        provincia:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        codigo_postal
    },
    {
        sequelize:db,
        modelName: 'address',
    }); 


module.exports = Address;