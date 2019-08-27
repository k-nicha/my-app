import React from 'react'
import SingleRecepie from './SingleRecepie'
import { connect } from 'react-redux'

const Favorites = (props) => {
    let emptyList = ''
    const components = props.favorites.map((element) => {
        return <SingleRecepie
            key={element.id}
            description={element.title}
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

function mapStateToProps (state) {
    return {
        favorites: state.favorites.recepies
    }
}

export default connect(mapStateToProps)(Favorites)

