import React from 'react'
import SingleRecepie from './SingleRecepie'
import { connect } from 'react-redux'

const Favorites = (props) => {
    let emptyList = ''
    let array = JSON.parse(localStorage.favorites)
    const components = array.map((element) => {
        return <SingleRecepie
            action='remove'
            key={element.key}
            id={element.key}
            description={element.description}
        />
    })

    if (components.length < 1) {
        emptyList = 'You have no favorite recepies'
    }
    
    return <div>
        {emptyList}
        {components}
    </div>
}

function mapStateToProps (state, ownProps) {
    return {
        favorites: state.favorites.recepies
    }
}

export default connect(mapStateToProps)(Favorites)

