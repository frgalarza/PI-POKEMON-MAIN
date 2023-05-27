const axios = require('axios')
const { Pokemon } = require('../db')

const getPokemonById = async(id) => {

    if(id.length === 36) {
        const characterById = await Pokemon.findOne({where: {id}})

        if(!characterById) throw new Error('Pokemon not found')

        return characterById
    }

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const { name, sprites, stats, height, weight, types } = (await axios(url)).data
        const characterById = {
            id,
            name,
            image: sprites.other.home.front_default,
            life : stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            speed: stats[5].base_stat,
            height,
            weight,
            types: types.map(element => element.type.name)
        }
            
        return characterById        
    } catch (error) {
        error.message = 'Not found'
        return error.message
    }
    
    

}

module.exports = getPokemonById