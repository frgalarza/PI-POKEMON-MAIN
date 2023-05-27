const { Router } = require('express');
const express = require('express')
const morgan = require('morgan')
const getPokemonByIdRouter = require('./getPokemonByIdRoute')
const getPokemonsRouter = require('./getPokemonRoute')
const getTypesRouter = require('./getTypesRoute')
const newPokemonRouter = require('./postPokemonRoute')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(morgan('dev'))
router.use(express.json())

router.use('/pokemons', getPokemonByIdRouter, getPokemonsRouter, newPokemonRouter)
router.use('/types', getTypesRouter)


module.exports = router;
