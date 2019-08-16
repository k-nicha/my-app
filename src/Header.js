import React from 'react'

// function Header () {}

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            'count': 0
        }

    }

    increment = () => {
        this.setState(
            { 'count': this.state.count + 1 }
        )
    }

    render () {
        const { name, surname } = this.props
        console.log(this.state)

        if (name && surname) {
            return <div>
                {name + ' ' + surname}
                <button id='increment' onClick={this.increment}>
                    Increment me!
                </button>
                <div>
                    number: {this.state.count}
                </div>
            </div>
        } else {
            return <div>Error 404</div>
        }
    }
}

export default Header