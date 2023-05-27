import { ADD_POKEMON } from "./action";

const initialState = {
    allCharacters : [],
    allCharactersCopyState : []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POKEMON:
            return {...state, allCharacters: [...action.payload], allCharactersCopyState: action.payload}
    
        default:
            break;
    }
}

export default reducer