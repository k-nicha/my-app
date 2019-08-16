import React from 'react'
import { BrowserRouter as Router, Route } 
    from 'react-router-dom'
import Home from './Home.js'
import Menu from './Menu.js'

const Routes = () => {
    return (
        <Router>
            
            <Menu /> 

            <Route exact path='/' component={null} />
            <Route exact path='/login' component={Home} />   

               
        </Router>
    )
}

export default Routes