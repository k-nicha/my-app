export function addItemToFavorites (item) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_ITEM_TO_FAVORITES',
            payload: item
        })
    }
}