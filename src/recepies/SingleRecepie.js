import React from 'react'
import store from '../redux/store.js'
import { addItemToFavorites }
    from
    '../redux/favoritesActions' 

export default class SingleRecepie extends React.Component {
    addToFavorites = () => {
        store.dispatch(addItemToFavorites(this.props.description))
    }

    render () {
        return <div className='flex-item'>
            <div id='tuna'>{this.props.description}</div>
            <button className='btn btn-success'
            onClick={this.addToFavorites}
            >
                Add to favorites
            </button>
        </div>
    }
}