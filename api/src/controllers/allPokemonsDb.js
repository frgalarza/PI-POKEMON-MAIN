const { Pokemon } = require('../db')

const allPokemonsDb = async() => {
    const allCharacters = await Pokemon.findAll()

    return allCharacters
}

module.exports = allPokemonsDb