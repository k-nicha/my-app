import React from 'react'

const Register = (props) => {
    return <div>
        <input id='email' placeholder='email' type='email' />
        <br />
        <input id='username' placeholder='username' type='text' />
        <br />
        <input id='password' placeholder='password' type='password'/>
        <br />
        <input id='repeat_password' placeholder='repeat password' type='password'/>
        <br />
        <button id='register'>Register</button>
    </div>
}

export default Register