import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Todos extends Component{
    toggleTodoStatus(id, e){
        this.props.toggleTodoStatus(id, e.target.checked);
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        let todos = this.props.todos.map((todo) => {
            return (
                <li key={todo.id} className='row list-group-item active'>
                    <input type="checkbox" onChange={this.toggleTodoStatus.bind(this, todo.id)} className={`col-sm-1`} checked={todo.status}/>
                    <label className='css-todo-details col-sm-9'>
                        <div className="row">
                            <div className="col-sm-8"><span>{todo.aim}</span></div>
                            <div className="col-sm-4"><span>{todo.date}</span></div>
                        </div>
                    </label>
                    <span onClick={this.removeTodo.bind(this, todo.id)} className={`css-remove-todo glyphicon glyphicon-remove col-sm-1`}></span>
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

Todos.propTypes ={
    toggleTodoStatus : PropTypes.func,
    removeTodo : PropTypes.func,
    todos: PropTypes.array
};