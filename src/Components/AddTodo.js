import React, {Component} from 'react'
import uuid from 'uuid';
import '../App.css';
class AddTodo extends Component{
    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e){
        e.preventDefault();
        if(!this.refs.aim.value){
            alert('Please enter a todo');
        }
        else if(!this.refs.date.value){
            alert('Please enter a date');
        }
        else{
            let newTodo = {
                id: uuid.v4(),
                status: false,
                aim: this.refs.aim.value,
                date: this.refs.date.value
            };
            this.props.addTodo(newTodo);
            this.refs.todoForm.reset();
        }
    }

    render(){
        return(
            <div className="col-sm-5 css-add-todo">
                <form onSubmit={this.addTodo} className='css-aim' ref='todoForm'>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <input type="text" className="form-control" placeholder={this.props.labels.inputPlaceholder} ref='aim'/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-7">
                            <input className="form-control" type="date" ref='date'/>
                        </div>
                        <div className="col-sm-offset-1 col-sm-4">
                            <button className='btn btn-success'>{this.props.labels.addToDoBtn}</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;