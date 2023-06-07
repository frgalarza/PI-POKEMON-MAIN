import { ADD_POKEMON, ADD_TYPES, CREATE_POKEMON, FILTER_ORIGIN, FILTER_TYPE, ORDER_CHARACTERS, SEARCH_NAME } from "./action";

const initialState = {
    allCharacters : [],
    allTypes: [],
    copyAllCharacters : [],
    filteredPokemons : [],
    flagFilter : 0,
    findByName : []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON:
            return {...state, allCharacters: [...action.payload], copyAllCharacters: [...action.payload]}
        
        case ADD_TYPES:
            return {
                ...state,
                allTypes: [...action.payload]
            }

        case FILTER_TYPE:
            let allCharacter = [...state.allCharacters]
            let copyAllCharacter = [...state.copyAllCharacters]
            let charactersFilterType = []
            let flagFilter = state.flagFilter
            if(action.payload === 'all') {
                charactersFilterType = copyAllCharacter
                flagFilter = 0
            }
            else if(state.flagFilter <= 1) {
                charactersFilterType = allCharacter.filter(character => character.types.includes(action.payload))
                flagFilter ++
            }
            else {
                charactersFilterType = copyAllCharacter.filter(character => character.types.includes(action.payload))
                flagFilter = 1
            }
            return {
                ...state,
                allCharacters: charactersFilterType,
                flagFilter: flagFilter,
                filteredPokemons: charactersFilterType
            }

        case FILTER_ORIGIN:
            let characters = [...state.allCharacters]
            let charactersFilterOrigin = []
            
            if(action.payload === 'all origins') charactersFilterOrigin = [...state.copyAllCharacters]
            else if(action.payload === 'Created') charactersFilterOrigin = characters.filter(character => character.id.length === 36)
            else charactersFilterOrigin = characters.filter(character => typeof character.id === 'number')

            return {
                ...state,
                allCharacters: charactersFilterOrigin
            }

        case SEARCH_NAME:
            let characterByName = action.payload
            let charactersByName = []
            if(state.findByName.includes(characterByName)) charactersByName = [...state.findByName]
            else charactersByName = [...state.findByName, characterByName]
            return {
                ...state,
                allCharacters: charactersByName,
                findByName: charactersByName,
            }

        case CREATE_POKEMON:
            return {
                ...state
            }

        case ORDER_CHARACTERS:
            let charactersToOrder = [...state.allCharacters]
            if(action.payload === 'A-Z') {
                charactersToOrder = charactersToOrder.sort((a, b) => {
                    if(a.name < b.name) return -1
                    if(a.name > b.name) return 1
                    return 0
                })
            }
            else if(action.payload === 'Z-A') {
                charactersToOrder = charactersToOrder.sort((a, b) => {
                    if(a.name < b.name) return 1
                    if(a.name > b.name) return -1
                    return 0
                })
            }
            else if(action.payload === "Strong") {
                charactersToOrder = charactersToOrder.sort((a, b) => {
                    if(a.attack < b.attack) return -1
                    if(a.attack > b.attack) return 1
                    return 0
                })
            }
            if(action.payload === "Weak") {
                charactersToOrder = charactersToOrder.sort((a, b) => {
                    if(a.attack < b.attack) return 1
                    if(a.attack > b.attack) return -1
                    return 0
                })
            }

            return {
                ...state,
                allCharacters: charactersToOrder
            }
    
        default:
            break;
    }
}

export default reducer