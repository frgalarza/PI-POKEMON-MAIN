 const { Pokemon, Type } = require('../db')

const createPokemon = async(name, image, life, attack, defense, speed, height, weight, type) => {
    if(!name || !image || !life || !attack || !defense || !speed || !height || !weight || !type) throw new Error('Missing data')

    const pokemonCreado = await Pokemon.create({
        name,
        image, 
        life, 
        attack, 
        defense, 
        speed, 
        height, 
        weight,
        }
        )
    const typesDb = await Type.findAll({where: {name: type}})

    await pokemonCreado.addType(typesDb)
    return pokemonCreado
}

module.exports = createPokemon