import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from './utils/history';
import Home from './pages/Home';
import Section from './pages/Section';

export default function Routes() {
    return (
        <Router history={history}>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/section/:section" component={Section} />
        </Router>
    );
}
