import React from 'react'
import store, {saveUsername} from '../redux/store'
import LoggedInAs from './LoggedInAs.js'

class Login extends React.Component {
    constructor () {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    onInputChange = (event) => {
        // store user input in state
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    displayUserInput = () => {
        console.log(this.state)
        alert(this.state.username + this.state.password)
    }

    render () {
        return <div>
            <input 
                onChange={this.onInputChange} 
                id='username' placeholder='username' type='text' />
            <br />
            <input 
                onChange={this.onInputChange} 
                id='password' placeholder='password' type='password'/>
            <br />
            <button
                onClick={() => store.dispatch(saveUsername(this.state.username))}
                id='login'>
                Log In
            </button>

            <LoggedInAs />
            
        </div>
    }
}

export default Login