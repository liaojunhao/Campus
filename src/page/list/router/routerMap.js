import React, { Component } from 'react'
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from '../containers/App';
import Ment from '../containers/joblist/joblist';
import NotFound from '../containers/NotFound/404';
import Home from '../containers/Home/home';
import Datail from '../containers/Datail/datail';

class RoutMap extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <Route exact path="/" component={Home}/>
                    <Route path="Ment" component={Ment}/>
                    <Route path="Datail" component={Datail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RoutMap