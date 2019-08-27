import React from 'react'
import store from '../redux/store'
// import axios from 'axios'
import { connect } from 'react-redux'
import './recepies.css'
import { fetchRecepies } from '../redux/fetchRecepies.js'
import SingleRecepie from './SingleRecepie.js'

class Recepies extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            recepies: [],
            error: null,
        }
    }

    componentDidMount () {
        if (this.props.recepies.length === 0) {
            store.dispatch(fetchRecepies())
        }
        /* axios.get(
            'https://jsonplaceholder.typicode.com/todos'
          ).then((response) => {
              this.setState({ recepies: response.data})
          }).catch((error) => {
            this.setState({ error: error.data})
          }) */
    }

    render () {
        const components = this.props.recepies.map((element) => {
            return <SingleRecepie
                key={element.id}
                description={element.title}
            />
        })

        if (this.props.isBusy) {
            return <div className='lds-dual-ring'></div>
        }
        else {
            return <div id='recepies' className='flex-container'>
                {components}
            </div>
        }
    }
}

function mapStateToProps (state) {
    return {
        recepies: state.recepies.recepies,
        isBusy: state.recepies.isBusy
    }
}

export default connect(mapStateToProps)(Recepies)