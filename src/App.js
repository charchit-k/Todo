import React, { Component } from 'react';
import $ from 'jquery';
import AddTodo from './Components/AddTodo';
import Header from './Components/Header';
import Todos from './Components/Todos';

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            head: {
                title:'My To-Do',
                removeAll: 'Remove All',
                completeAll: 'Complete All'
            },
            addToDoLbls: {
                inputPlaceholder : 'My New To-do',
                addToDoBtn: 'Add',
                saveToDoBtn: 'Update',
                defaultInput: '',
                defaultDate: '',
                id:'',
                status: false
            },
            todos:  JSON.parse(localStorage.getItem('todoList')) || []
        };
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.completeAll = this.completeAll.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    addTodo(newTodo){
        let tempTodos = this.state.todos.slice(),
            addToDoLbls = {...this.state.addToDoLbls},
            currentTodo = tempTodos.filter(todo => todo.id === newTodo.id)[0];
            if(currentTodo){
                tempTodos.splice(currentTodo.id,1);
            }
        tempTodos.push(newTodo);
        addToDoLbls.defaultInput= '';
        addToDoLbls.defaultDate= '';
        addToDoLbls.id= '';
        this.setState({
            todos: tempTodos,
            addToDoLbls: addToDoLbls
        });
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

    completeAll(){
        let tempTodos = this.state.todos.slice();
        $.each(tempTodos, (index, todo)=>{
            todo.status = true;
        });
        this.setState({todos:tempTodos});
        localStorage.setItem('todoList', JSON.stringify(tempTodos));
    }

    removeAll(){
        this.setState({todos: []});
        localStorage.setItem('todoList', JSON.stringify([]));
    }

    editTodo(id){
        let todos = this.state.todos.slice(),
            currentTodo = todos.filter(todo => todo.id === id)[0],
            addToDoLbls = {...this.state.addToDoLbls};
        addToDoLbls.defaultInput= currentTodo.aim;
        addToDoLbls.defaultDate= currentTodo.date;
        addToDoLbls.id= currentTodo.id;
        addToDoLbls.status= currentTodo.status;
        this.setState({addToDoLbls});

    }

    render(){
        return(
            <div>
                <Header head={this.state.head} completeAll={this.completeAll} removeAll={this.removeAll}/>
                <div className="container">
                    <div className='row'>
                        <AddTodo addTodo={this.addTodo} labels={this.state.addToDoLbls}/>
                        <Todos todos={this.state.todos} toggleTodoStatus={this.toggleTodoStatus} removeTodo = {this.removeTodo} editTodo ={this.editTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
