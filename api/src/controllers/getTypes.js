const axios = require('axios')
const { Type } = require('../db')

const getTypes = async() => {
    const URL = "https://pokeapi.co/api/v2/type"

    const { data } = await axios(URL)
    const allTypes = data.results

    if(!data) throw new Error('Internal error')
    
    allTypes.forEach(type => {
        Type.findOrCreate({where : { name: type.name }})
    });
    const types = await Type.findAll()
    return types
}

module.exports = getTypes