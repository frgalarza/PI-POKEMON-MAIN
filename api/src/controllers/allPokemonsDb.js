const { Pokemon, Type } = require('../db');

const allPokemonsDb = async() => {
    const allCharacters = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    return allCharacters
}

module.exports = allPokemonsDb