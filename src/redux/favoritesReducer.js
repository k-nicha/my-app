export function favoritesReducer (
    state = {recepies: []}, action
) {
    switch(action.type) {
        case 'ADD_ITEM_TO_FAVORITES': {
            for (let i = 0; i < state.recepies.length; i++) {
                if (state.recepies[i].description === action.payload) {
                    return state
                }
            }
            const newArray = state.recepies.slice()
            newArray.push({
                description: action.payload
            })
            return {recepies: newArray}
        }
        default: {
            return state
        }
    }
}