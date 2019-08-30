import axios from 'axios'

export function searchRecepiesWithFilter (url, data) {
    return function (dispatch) {
        axios.post(url, data).then((response) => {
            dispatch({type: 'SEARCH_SUCCESFUL', payload: response.data})
        }).catch((error) => {
            dispatch({type: 'SEARCH_FAILED', payload: error})
        })     
    }
}