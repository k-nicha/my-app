import React from 'react'

const Login = (props) => {
    return <div>
        <input id='username' placeholder='username' type='text' />
        <br />
        <input id='password' placeholder='password' type='password'/>
        <br />
        <button id='login'>Log In</button>
    </div>
}

export default Login