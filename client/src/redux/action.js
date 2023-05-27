import axios from 'axios'

export const ADD_POKEMON = 'ADD_POKEMON'
export const ADD_TYPES = 'ADD_TYPES'

export const addPokemon = ()=>{
    try {
        return async(dispatch) => {
            const endpoint = 'http://localhost:3001/pokemons'
            const { data } = await axios(endpoint)

            return dispatch({
                type: ADD_POKEMON,
                payload: data
            })
        }
    } catch (error) {
        return {error: error.message}
    }
}

export const addTypes = () => {
    try {
        return async(dispatch) => {
            const endpoint = 'http://localhost:3001/types'
            const { data } = await axios(endpoint)

            return dispatch({
                type: ADD_TYPES,
                payload: data
            })
        }   
    } catch (error) {
        return {error: error.message}
    }
}