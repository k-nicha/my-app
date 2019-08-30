import React from 'react'
import store from './redux/store'
import { searchRecepiesWithFilter } from './redux/searchActions'

export default class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            'name': null,
            'ingredients': null
        }
    }

    saveInputData = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    searchRecepies = () => {
        const name = this.state.name
        const ingredients = this.state.ingredients
        if (name || ingredients) {
            let url = `https://jsonplaceholder.typicode.com/todos`
            let data = {
                name, ingredients 
            }

            store.dispatch(searchRecepiesWithFilter(url, data))
           
        }
    }

    render () {
        return (
            <div>
                <input id='name' 
                    onChange={this.saveInputData} 
                    type='text' 
                    placeholder='name'/>
                <input id='ingredients' 
                    onChange={this.saveInputData} 
                    type='text' 
                    placeholder='ingredients'/>
                
                <button onClick={this.searchRecepies}> Search! </button>
                {this.props.children}
            </div>
        )
    }
    
}