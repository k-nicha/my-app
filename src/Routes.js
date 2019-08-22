import React from 'react'
import { BrowserRouter as Router, Route, Switch } 
    from 'react-router-dom'
import Home from './Home.js'
import Menu from './Menu.js'
import LoggedInAs from './loginComponents/LoggedInAs.js'
import Favorites from './Favorites'

const Routes = () => {
    return (
        <Router>
            
            <Menu />
            <Switch>
                <Route exact path='/' component={null} />
                <Route exact path='/login' component={Home} />
                <Route exact path='/main' component={LoggedInAs} />
                <Route exact path='/fav' component={Favorites} />
                <Route exact component={PathError} />
            </Switch>
            
        </Router>
    )
}

export default Routes

const PathError = () => {
    return <h1> Error 404! Not found. </h1>
}