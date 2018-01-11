import React, {Component} from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as todoActions from "../actions/todosAction";


class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {...this.props};
        this.addTodo = this.addTodo.bind(this);
        this.onAimChange = this.onAimChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    clearForm(){
        this.setState({
            aim: '',
            date: ''
        })
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
            const { dispatch } = this.props;
            dispatch(todoActions.addTodo({
                id: e.target.id|| uuid.v4(),
                status: this.state.status,
                aim: this.refs.aim.value,
                date: this.refs.date.value
            }));
            this.clearForm();
        }
    }

    updateTodo(){
        const { dispatch } = this.props;
        dispatch(todoActions.updateTodo({
            id: this.state.id,
            status: this.state.status,
            aim: this.refs.aim.value,
            date: this.refs.date.value
        }));
        this.clearForm();
    }

    onAimChange(e){
        this.setState({
            aim : e.target.value
        });
    }
    onDateChange(e){
        this.setState({
            date : e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.date !== this.state.date) {
            this.setState({
                date: nextProps.date,
                aim: nextProps.aim,
                id: nextProps.id,
                status: nextProps.status,
            });
        }
    }

    render(){
        let button = this.state.id === '' ?
            <input type='button' className='btn btn-success' value={`Add`} onClick={this.addTodo}/> :
            <input type='button' className='btn btn-success' value={`Update`} onClick={this.updateTodo.bind(this)} id ={this.state.id}/>;
        return(
            <div className="col-sm-5 css-add-todo">
                <form className='css-todo-form' ref='todoForm'>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <input type="text"
                                   className="form-control"
                                   placeholder={`My New To-do`}
                                   ref='aim' value={this.state.aim}
                                   onChange={this.onAimChange}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-7">
                            <input className="form-control" type="date" ref='date' value={this.state.date} onChange={this.onDateChange}/>
                        </div>
                        <div className="col-sm-offset-1 col-sm-4">
                            {button}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {date, aim, id, status} = state.todoApp;
    return {
        date,
        aim,
        id,
        status
    };
}

export default connect(mapStateToProps)(AddTodo);

AddTodo.propTypes ={
    addTodo : PropTypes.func
};