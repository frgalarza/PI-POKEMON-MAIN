const allPokemonsDb = require('../controllers/allPokemonsDb')
const createPokemon = require('../controllers/createPokemon')

const newPokemonRouter = require('express').Router()

newPokemonRouter.post('/', async(req, res) => {
    try {
        const { name, image, life, attack, defense, speed, height, weight, types } = req.body

        const pokemonCreated = await createPokemon(name, image, life, attack, defense, speed, height, weight, types)

        return res.status(200).json(pokemonCreated)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})

module.exports = newPokemonRouter