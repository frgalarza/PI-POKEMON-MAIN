const allPokemonsApi = require('../controllers/allPokemonsApi')
const allPokemonsDb = require('../controllers/allPokemonsDb')
const getPokemonByName = require('../controllers/getPokemonByName')
const getPokemonsRouter = require('express').Router()

getPokemonsRouter.get('/', async(req, res) => {
    try {
        const { name } = req.query

        if(name) {
            const pokemonByName = await getPokemonByName(name)
            
            return res.status(200).json(pokemonByName)
        }

        let pokemonsApi = await allPokemonsApi()
        let pokemonsDb = await allPokemonsDb()
    

        console.log(pokemonsDb);

        const allPokemons = [...pokemonsApi, ...pokemonsDb]

        return res.status(200).json(allPokemons)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = getPokemonsRouter