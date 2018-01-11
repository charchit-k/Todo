import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import {loadState, saveState} from "../utils/localStorage";
import throttle from 'lodash/throttle';

const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk
];
const configureStore = () => {
    const persistedStore = loadState();
    const store = createStore(
        reducer,
        persistedStore,
        compose(applyMiddleware(...middlewares))
    );

    store.subscribe(throttle(() =>{
        saveState({
            todoApp: store.getState().todoApp
        });
    }, 1000));

    return store;
};

export default configureStore;