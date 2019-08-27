export function recepiesReducer (
    state={
        recepies: [],
        error: null,
        isBusy: false
    }, action
) {
    switch(action.type) {
        case 'FETCH_RECEPIES_PENDING': {
            return { ...state, isBusy: true }
        }
        case 'FETCH_RECEPIES_SUCCESS': {
            return { ...state,
                recepies: action.payload,
                isBusy: false
            }
        }
        case 'FETCH_RECEPIES_FAILED': {
            return { ...state,
                error: action.payload,
                isBusy: false
            }
        }
        default: {
            return state
        }
    }
}