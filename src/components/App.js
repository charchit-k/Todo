import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Header from './Header';
import Todos from './Todos';
import * as todoActions from '../actions/todosAction';
import { connect } from "react-redux";

class App extends Component{
    constructor(props){
        super(props);
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleAllTodos = this.toggleAllTodos.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }


    toggleTodoStatus(id){
        const { dispatch } = this.props;
        dispatch(todoActions.toggleTodo(id));
    }
    removeTodo(id){
        const { dispatch } = this.props;
        dispatch(todoActions.removeTodo(id));
    }
    toggleAllTodos(){
        const { dispatch } = this.props;
        dispatch(todoActions.toggleAllTodos());
    }
    removeAll(){
        const { dispatch } = this.props;
        dispatch(todoActions.removeAllTodos());
    }
    editTodo(id){
        const { dispatch, todos } = this.props;
        dispatch(todoActions.editTodo( todos.filter(todo => todo.id === id)[0]));

    }
    render(){
        return(
            <div>
                <Header toggleAllTodos={this.toggleAllTodos} removeAll={this.removeAll}/>
                <div className="container">
                    <div className='row'>
                        <AddTodo />
                        <Todos todos={this.props.todos} toggleTodoStatus={this.toggleTodoStatus} removeTodo = {this.removeTodo} editTodo ={this.editTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const todos = state.todoApp.todos;
    return {
        todos
    };
}

export default connect(mapStateToProps)(App);



