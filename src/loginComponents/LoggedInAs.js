import React from 'react'
import { connect } from 'react-redux'

const LoggedInAs = (props) => {
    return <div> Logged in as: {props.username}</div>
}

function mapStateToProps (state) {
    return {
        username: state.usernameReducer.usernameReducer
    }
}

export default connect(mapStateToProps)(LoggedInAs)