import React from 'react';
import {render} from 'react-dom';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Root from './Components/Root';

const store = configureStore();
render(
    <Root store={store}/>,
    document.getElementById('root'));
registerServiceWorker();
