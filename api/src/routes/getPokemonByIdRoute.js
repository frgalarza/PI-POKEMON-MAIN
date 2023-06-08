const pokemonIdRouter = require('express').Router()
const getPokemonById = require('../controllers/getPokemonById')

pokemonIdRouter.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const pokemonById = await getPokemonById(id)

        console.log(pokemonById);

        return res.status(200).json(pokemonById)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = pokemonIdRouter