import React, { Component } from 'react';
import $ from 'jquery';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Todos from './Components/Todos';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            title:'My To-Do',
            addToDoLbls: {
                inputPlaceholder : 'My New To-do',
                addToDoBtn: 'Add'
            },
            todos:  JSON.parse(localStorage.getItem('todoList')) || []
        };
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(newTodo){
        let tempTodos = this.state.todos.slice();
        tempTodos.push(newTodo);
        this.setState({todos:tempTodos});
        localStorage.setItem('todoList', JSON.stringify(tempTodos));
    }
    toggleTodoStatus(id, status){
        let tempTodos = this.state.todos.slice();
        $.each(tempTodos, (index, todo)=>{
            if(todo.id === id){
                todo.status = status;
            }
        });
        this.setState({todos:tempTodos});
        localStorage.setItem('todoList', JSON.stringify(tempTodos));
    }

    removeTodo(id){
        let tempTodos = this.state.todos.slice();
        tempTodos.splice(tempTodos.indexOf(id), 1);
        this.setState({todos:tempTodos});
        localStorage.setItem('todoList', JSON.stringify(tempTodos));
    }

    render(){
        return(
            <div>
                <Header title={this.state.title}/>
                <div className="container">
                    <div className='row'>
                        <AddTodo addTodo={this.addTodo} labels={this.state.addToDoLbls}/>
                        <Todos todos={this.state.todos} toggleTodoStatus={this.toggleTodoStatus} removeTodo = {this.removeTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
