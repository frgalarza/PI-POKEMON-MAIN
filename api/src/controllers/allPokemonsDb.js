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

    console.log(allCharacters);

    return allCharacters
}

module.exports = allPokemonsDb