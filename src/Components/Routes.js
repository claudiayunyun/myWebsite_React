import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from '../Containers/Home'
import ColorfulLife from '../Containers/ColorfulLife'
import { Favourites } from '../Containers/Favourites'
import { Introduction } from '../Containers/Introduction'
import  Resume  from '../Containers/Resume'
import { Others } from '../Containers/Others'


export const Routes = () => {
    return ( 
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/colorfullife' component={ColorfulLife}/>
                <Route exact path='/favourites' component={Favourites}/>
                <Route exact path='/introduction' component={Introduction}/>
                <Route exact path='/resume' component={Resume}/>
                <Route exact path='/others' component={Others}/>
            </Switch>
        </Router>
    )
}

