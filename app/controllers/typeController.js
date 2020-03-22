const { Type } = require('../models');

const typeController = {
    typePage: async (req, res) => {
        try {

            const types = await Type.findAll(); 

            res.render("types", {
                types,
            });

        } catch (error) {
            console.log(error);
        }
       
         
    }, 

    showByType: async (req, res) => {
        try {
            const typeId = req.params.id; 

            const type = await Type.findByPk(typeId, {
                include: {
                    association: "pokemons",
                    include: "types", 
                },
               
            }); 

            res.render("index", {
                pokemons: type.pokemons,
            }); 

        } catch (error) {
            console.log(error);
        }

    }

}

module.exports = typeController ;