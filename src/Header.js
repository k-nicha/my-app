import React from 'react'

// function Header () {}

class Header extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        const { name, surname } = this.props
        if (name && surname) {
            return <div>{name + ' ' + surname}</div>
        } else {
            return <div>Error 404</div>
        }
    }
}

export default Header