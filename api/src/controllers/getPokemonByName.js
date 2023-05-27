const axios = require('axios')
const { Pokemon } = require('../db')

const getPokemonByName = async(name) => {
    name = name.toLowerCase()
    let pokemonByName = await Pokemon.findOne({where: {name}})

    if(!pokemonByName){
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`
            const { data } = await axios(url)
            const { id, sprites, stats, height, weight, types } = data
    
            let pokemonByName = {
                id,
                name,
                image: sprites.other.home.front_default,
                life : stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                speed: stats[5].base_stat,
                height,
                weight,
                type: types.map(element => element.type.name)
            }
            return pokemonByName
        }
         catch (error) {
            error.message = 'Not found'
            return error.message
        }
    }
    return pokemonByName
}

module.exports = getPokemonByName