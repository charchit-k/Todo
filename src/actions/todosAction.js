export default addTodo = (todo) =>{
    return (dispatch)=> {
        return {
            type : 'ADD_TODO',
            todo
        }
    }
}
export default updateTodo = (todo) =>{
    return (dispatch)=> {
        return {
            type : 'UPDATE_TODO',
            todo
        }
    }
}
export default completeAllTodos = () =>{
    return (dispatch)=> {
        return {
            type : 'COMPLETE_ALL_TODOS'
        }
    }
}
export default removeTodo = (todo) =>{
    return (dispatch)=> {
        return {
            type : 'REMOVE_TODO',
            todo
        }
    }
}
export default removeAllTodos = () =>{
    return (dispatch)=> {
        return {
            type : 'REMOVE_ALL_TODOS'
        }
    }
}