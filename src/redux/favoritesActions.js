export function addItemToFavorites (item) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_ITEM_TO_FAVORITES',
            payload: item
        })
    }
}

export function removeItemFromFavorites (id) {
    return function (dispatch) {
        dispatch({
            type: 'REMOVE_ITEM_FROM_FAVORITES',
            payload: id
        })
    }
}