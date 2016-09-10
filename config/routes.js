import React from 'react';
import { Router, Route, DefaultRoute, hashHistory} from 'react-router';
import Main from '../app/components/Main';
import Home from '../app/components/Home';


export default (
    <Router history={hashHistory}>
        <Route path='/' handler={Main}>
            <DefaultRoute handler={Home} />
        </Route>
    </Router>
    );
