const Pokemon = require('./pokemon'); 
const Type = require('./type'); 

Pokemon.belongsToMany(Type, {
    through: "pokemon_type",
    sourceKey:"numero", 
    otherKey: "type_id",
    timestamps: false,
    as: "types"
}); 

Type.belongsToMany(Pokemon, {
    through: "pokemon_type", 
    foreignKey: "type_id", 
    otherKey: "pokemon_numero",
    timestamps: false,
    as: "pokemons"
}); 


module.exports = {
    Pokemon, Type
}