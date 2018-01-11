const initialState =
    {   todos:[],
        aim: '',
        date: '',
        id:'',
        status: false
    };
const todos = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_TODO':
            return {...state, todos:[...state.todos, action.todo]};

        case 'UPDATE_TODO':
            return {...state,  aim: '', date: '', id:'',
                todos: state.todos.map(todo => {if(todo.id === action.todo.id){
                    return {...todo, ...action.todo};
                }
                    return todo;
                })};

        case 'TOGGLE_ALL_TODOS':
            return{...state, todos:state.todos.map(todo => {
                    return {...todo, status:!todo.status};
                })} ;

        case 'TOGGLE_TODO':
            return {...state,todos: state.todos.map(todo=>{
                    if(todo.id === action.id){
                        return {...todo , status: !todo.status};
                    }
                    return todo;
                })};

        case 'REMOVE_TODO':
            return{...state, todos:state.todos.filter(todo => todo.id !== action.id)};

        case 'REMOVE_ALL_TODOS':
            return{...state, todos:[]};

        case 'EDIT_TODO':
            return {...state, ...action.todo};
        default:
            return state;

    }
};
export default todos;