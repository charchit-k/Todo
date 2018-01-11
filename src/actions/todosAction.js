export function toggleTodo(id){
    return (dispatch)=> {
        return dispatch({
            type : 'TOGGLE_TODO',
            id
        })
    }
}
export function toggleAllTodos(){
    return (dispatch)=> {
        return dispatch({
            type : 'TOGGLE_ALL_TODOS'
        })
    }
}
export function removeTodo(id){
    return (dispatch)=> {
        return dispatch({
            type : 'REMOVE_TODO',
            id
        })
    }
}
export function removeAllTodos(){
    return (dispatch)=> {
        return dispatch({
            type : 'REMOVE_ALL_TODOS'
        })
    }
}
export function editTodo(todo){
    return (dispatch)=> {
        return dispatch({
            type : 'EDIT_TODO',
            todo
        })
    }
}

export function addTodo(todo){
    return (dispatch)=> {
        return dispatch({
            type : 'ADD_TODO',
            todo
        })
    }
}

export function updateTodo(todo){
    return (dispatch)=> {
        return dispatch({
            type : 'UPDATE_TODO',
            todo
        })
    }
}


