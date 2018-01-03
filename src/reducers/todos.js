export default todos = (state = [] , action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.todo];

        case 'UPDATE_TODO':
            return state.map(todo => {
                if(todo.id === action.newTodo.id){
                    return {...todo, ...action.newTodo};
                }
                return todo;
            });

        case 'COMPLETE_ALL_TODOS':
            return state.map(todo => {
                return {...todo, status:true};
            });

        case 'REMOVE_TODO':
            return [...state.slice(0, action.todo.id), ...state.slice(action.todo.id + 1)];

        case 'REMOVE_ALL_TODOS':
            return [];
        default:
            return state;

    }
}