import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from '../components/App'
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

export default (
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/header" component={Header}/>
        <Route path="/footer" component={Footer}/>
    </Switch>
);