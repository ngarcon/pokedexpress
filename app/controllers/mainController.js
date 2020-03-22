const { Pokemon } = require('../models');

const Sequelize = require('sequelize');

const convertToRate =  (value) => {
    return Math.round((value / 100) * 255);
}

const mainController = {
    homePage: async (req, res) => {
        try {
            pokemons = await Pokemon.findAll({
                include : "types", 
                order: [Sequelize.col('numero'), 'numero']
            })
    
                res.render("index", {
                    pokemons,
                });
        } catch (error) {
            console.trace(error);
        }
    }, 

    pokemonPage: async (req, res) => {

        try {

            const pokemonId = req.params.id; 
            const pokemon = await Pokemon.findByPk(pokemonId, {
                include: "types",
            }); 
            
            pokemon.pv_rate = convertToRate(pokemon.pv);
            pokemon.attaque_rate = convertToRate(pokemon.attaque);
            pokemon.defense_rate = convertToRate(pokemon.defense);
            pokemon.attaque_spe_rate = convertToRate(pokemon.attaque_spe);
            pokemon.defense_spe_rate = convertToRate(pokemon.defense_spe);
            pokemon.vitesse_rate = convertToRate(pokemon.vitesse); 

            console.log(pokemon);
            res.render("details", {
                pokemon,
            }); 
        } catch (error) {
            console.log(error);
        }
    }   
                
}

module.exports = mainController ;