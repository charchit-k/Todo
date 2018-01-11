import { combineReducers } from 'redux';
import todoApp from './todosReducer';

const reducer = combineReducers({
    todoApp
});

export default reducer;
