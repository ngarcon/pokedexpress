const Sequelize = require('sequelize');
const client = require('../db_client'); 

class Type extends Sequelize.Model{}; 

Type.init({
    name: {
        type: Sequelize.TEXT, 
        allowNull: false,
    }, 
    color: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },

}, {
    sequelize: client,
    tableName: "type",
});

module.exports = Type; 