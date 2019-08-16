import React from 'react'
import Login from './loginComponents/Login.js'
import Register from './loginComponents/Register.js'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            componentToRender: 'Login',
            buttonText: 'Register new account'
        }
    }

    switch = () => {
        if (this.state.componentToRender === 'Login') {
            this.setState({
                'componentToRender': 'Register',
                'buttonText': 'Sign In'
            })
        } else {
            this.setState({
                'componentToRender': 'Login',
                'buttonText': 'Register new account'
            })
        }
        
    }

    render () {
        let component
        if (this.state.componentToRender === 'Login')
            component = <Login />
            else component = <Register />

        return <div>
            {component}
            <br />
            <br />
            <button id='switchComponent' onClick={this.switch}>
                {this.state.buttonText}
            </button>
        </div>
    }
}
