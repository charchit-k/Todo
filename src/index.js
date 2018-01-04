import React from 'react';
import {render} from 'react-dom';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from './components/Root';

const store = configureStore();
render(
    <Root store={store}/>,
    document.getElementById('root'));
registerServiceWorker();
