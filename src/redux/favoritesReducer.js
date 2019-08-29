export function favoritesReducer (
    state = {recepies: []}, action
) {
    switch(action.type) {
        case 'ADD_ITEM_TO_FAVORITES': {
            for (let i = 0; i < state.recepies.length; i++) {
                if (state.recepies[i].key === action.payload.key) {
                    return state
                }
            }
            const newArray = state.recepies.slice()
            newArray.push({
                key: action.payload.key,
                description: action.payload.description
            })

            let string = JSON.stringify(newArray)
            localStorage.setItem('favorites', string)
            console.log(localStorage)
            return {recepies: newArray}
        }

        case 'REMOVE_ITEM_FROM_FAVORITES': {
            /* Kreiraj niza od site elementi
            kaj koi sto IDto ne e ednakvo na action payload (id na kliknatiot element) */
            const arrayWithDeletedElement = state.recepies.filter((element) => {
                return element.key !== action.payload
            })
            /* Na kraj se vrakja novata niza bez elementot na koj sto
            sme kliknale REMOVE */
            let string = JSON.stringify(arrayWithDeletedElement)
            localStorage.setItem('favorites', string)
            return {recepies: arrayWithDeletedElement}
        }

        default: {
            return state
        }
    }
}