 const { Pokemon, Type } = require('../db')

const createPokemon = async(name, image, life, attack, defense, speed, height, weight, types) => {
    if(!name || !image || !life || !attack || !defense || !speed || !height || !weight || !types) throw new Error('Missing data')

    const pokemonCreado = await Pokemon.create({
        name,
        image, 
        life, 
        attack, 
        defense, 
        speed, 
        height, 
        weight, 
        type:types}
        )
    const poke = await Type.findAll({where : {name: types}})

    await pokemonCreado.addType(poke)
    return pokemonCreado
}

module.exports = createPokemon