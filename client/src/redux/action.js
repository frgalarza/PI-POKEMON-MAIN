import axios from 'axios'

export const ADD_POKEMON = 'ADD_POKEMON'
export const ADD_TYPES = 'ADD_TYPES'
export const FILTER_TYPE = 'FILTER_TYPE'
export const FILTER_ORIGIN = 'FILTER_ORIGIN'
export const SEARCH_NAME = 'SEARCH_NAME'
export const CREATE_POKEMON = 'CREATE_POKEMON'
export const ORDER_CHARACTERS = 'ORDER_CHARACTERS'

export const addPokemon = ()=>{
    return async(dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/pokemons'
            const { data } = await axios(endpoint)

            return dispatch({
                type: ADD_POKEMON,
                payload: data
            })
        } catch (error) {
            alert('Could not load characters')
        }
    }
}

export const addTypes = () => {
    return async(dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/types'
            const { data } = await axios(endpoint)

            return dispatch({
                type: ADD_TYPES,
                payload: data
            })
        } catch (error) {
            alert('Could not load characters')
        }
    }
}

export const filterPokemonsType = (type) => {
    return {
        type: FILTER_TYPE,
        payload: type
    }
}

export const filterPokemonsOrigin = (origin) => {
    return {
        type: FILTER_ORIGIN,
        payload: origin
    }
}

export const searchByName = (name) => {
    return async(dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/pokemons'
            const QUERY = `/?name=${name}`

            const { data } = await axios(endpoint + QUERY)

            return dispatch({
                type: SEARCH_NAME,
                payload: data
            })
        } catch (error) {
            alert('Character not found')
        }
    }
}

export const createPokemon = (newPokemon) => {
    return async(dispatch) => {
        try {
            const endpoint = 'http://localhost:3001/pokemons'

            const { data } = await axios.post(endpoint, newPokemon)

            return dispatch({
                type: CREATE_POKEMON,
                payload: data
            })
        } catch (error) {
            alert('Not created')
        }
    }
}

export const orderCharacters = (order) => {
    return {
        type: ORDER_CHARACTERS,
        payload: order
    }
}