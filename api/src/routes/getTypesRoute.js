const getTypes = require('../controllers/getTypes')

const getTypesRouter = require('express').Router()

getTypesRouter.get('/', async(req, res) => {
    try {
        const types = await getTypes()

        return res.status(200).json(types)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})

module.exports = getTypesRouter