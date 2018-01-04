import {createStore} from 'redux';
import reducer from '../reducers/index';
import {loadState, saveState} from "../utils/localStorage";
import throttle from 'lodash/throttle';

const configureStore = () => {
    const persistedStore = loadState();
    const store = createStore(
        reducer,
        persistedStore
    );

    store.subscribe(throttle(() =>{
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
};

export default configureStore;