import React, {Component} from 'react';
import '../App.css';

class Todos extends Component{
    constructor(props){
        super(props);
        this.toggleTodoStatus = this.toggleTodoStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    toggleTodoStatus(e){
        this.props.toggleTodoStatus(e.target.className, e.target.checked);
    }
    removeTodo(e){
        this.props.removeTodo(e.target.className);
    }
    render(){
        let todos = this.props.todos.map((todo) => {
            return (
                <li key={todo.id} className='row list-group-item active'>
                    <input type="checkbox" onChange={this.toggleTodoStatus} className={todo.id} checked={todo.status}/>
                    <label id={todo.id} className='css-todo-details'>
                        <span className="col-sm-6">{todo.aim}</span>
                        <span className="col-sm-5">{todo.date}</span>
                    </label>
                    <span onClick={this.removeTodo} className={`float-right ${todo.id} css-remove-todo`}>X</span>
                </li>
            );
        });
        return (
            <div className="col-sm-7 css-todos">
                <ul className='list-group'>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default Todos;