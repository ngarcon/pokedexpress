const Sequelize = require('sequelize');
const client = require('../db_client'); 

class Pokemon extends Sequelize.Model{}; 

Pokemon.init({
    nom: {
        type: Sequelize.TEXT, 
        allowNull: false,
    }, 
    pv: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    attaque: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    defense: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    attaque_spe: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    defense_spe: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    vitesse: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },
    numero: {
        type: Sequelize.INTEGER, 
        allowNull: false,
    },

}, {
    sequelize: client,
    tableName: "pokemon",
    underscored: true,
});

module.exports = Pokemon; 