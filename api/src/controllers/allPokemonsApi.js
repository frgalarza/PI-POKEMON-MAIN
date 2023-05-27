const axios = require('axios')

const allPokemonsApi = async() => {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=50'
    // Trae todos los personajes de la api, por temas de tiempo y recurso solo traigo 50
    // while(url !== null){
    //     await axios(url).then(res => res.data).then(response => {
    //             response.results.forEach(character => pokemonsInfo.push(character))
    //             url = response.next      
    //         }
    //     )
    // }
    try {
        const { data } = await axios(url)
        //Recorro pokemonsInfo donde esta la url del pokemon
        const allPromises = data.results.map(async(character)=> {
            return await axios(character.url)
        })
        
        const allCharacters = await Promise.all(allPromises).then((responsePromise) => {
            const pokemonsInfo = responsePromise.map(character => {
                const { data } = character
                return {
                    name: data.name,
                    id: data.id,
                    image: data.sprites.other.home.front_default,
                    life: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    speed: data.stats[5].base_stat,
                    height: data.height,
                    weight: data.weight,
                    types: data.types.map(element => element.type.name)
                }
            })
            return pokemonsInfo
        })
        return allCharacters
        
    } catch (error) {
        return error.message
    }
}


module.exports = allPokemonsApi