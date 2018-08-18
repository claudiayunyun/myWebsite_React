import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import { Home } from '../Containers/Home'
import ColorfulLife from '../Containers/ColorfulLife'
import { Favourites } from '../Containers/Favourites'
import { Introduction } from '../Containers/Introduction'


export const Routes = () => {
    console.log(process.env.PUBLIC_URL);
    return ( 
        <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/colorfullift' component={ColorfulLife}/>
            <Route exact path='/favourites' component={Favourites}/>
            <Route exact path='/introduction' component={Introduction}/>
        </Switch>
        </Router>
    )
}

