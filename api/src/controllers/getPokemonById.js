const axios = require('axios')
const { Pokemon, Type } = require('../db')

const getPokemonById = async(id) => {

    if(id.length === 36) {
        const characterById = await Pokemon.findOne({where: {id}, include:{ model: Type, atributtes: ['name'], through: {attributes: []} }})
 
        if(!characterById) throw new Error('Pokemon not found')
        
        characterById.types = characterById.types.map(type => type.name)
        
        return characterById
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { name, sprites, stats, height, weight, types } = (await axios(url)).data
    const characterById = {
        id,
        name : name[0].toUpperCase() + name.slice(1),
        image: sprites.other.home.front_default,
        life : stats[0].base_stat,
        attack: stats[1].base_stat,
        defense: stats[2].base_stat,
        speed: stats[5].base_stat,
        height,
        weight,
        types: types.map(element => element.type.name[0].toUpperCase() + element.type.name.slice(1))
        }

    if(!characterById) throw new Error('Not found')
            
    return characterById        

}

module.exports = getPokemonById