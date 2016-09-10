// import React from 'react';
// import { Router, Route, DefaultRoute, hashHistory} from 'react-router';
// import Main from '../app/components/Main';
// import Home from '../app/components/Home';


// export default (
//     <Router history={hashHistory}>
//         <Route path='/' handler={Main}>
//             <DefaultRoute handler={Home} />
//         </Route>
//     </Router>
//     );
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../app/components/Main');
var Home = require('../app/components/Home');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' handler={Main}>
      <IndexRoute handler={Home}/>
    </Route>
  </Router>
);



module.exports = routes;