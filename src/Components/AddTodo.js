import React, {Component} from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';


class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            defaultDate : this.props.labels.defaultDate,
            defaultInput : this.props.labels.defaultInput,
            id: this.props.labels.id,
            status: this.props.labels.status
        };
        this.addTodo = this.addTodo.bind(this);
        this.onAimChange = this.onAimChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
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
                id: e.target.id|| uuid.v4(),
                status: this.state.status,
                aim: this.refs.aim.value,
                date: this.refs.date.value
            };
            this.props.addTodo(newTodo);
        }
    }
    onAimChange(e){
        this.setState({
            defaultInput : e.target.value
        });
    }
    onDateChange(e){
        this.setState({
            defaultDate : e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.labels.defaultDate !== this.state.defaultDate) {
            this.setState({
                defaultDate: nextProps.labels.defaultDate,
                defaultInput: nextProps.labels.defaultInput,
                id: nextProps.labels.id,
                status: nextProps.labels.status,
            });
        }
    }

    render(){
        let button = this.state.id === '' ?
            <input type='button' className='btn btn-success' value={this.props.labels.addToDoBtn} onClick={this.addTodo}/> :
            <input type='button' className='btn btn-success' value={this.props.labels.saveToDoBtn} onClick={this.addTodo} id ={this.state.id}/>;
        return(
            <div className="col-sm-5 css-add-todo">
                <form className='css-todo-form' ref='todoForm'>
                    <div className="row">
                        <div className="col-sm-12 form-group">
                            <input type="text"
                                   className="form-control"
                                   placeholder={this.props.labels.inputPlaceholder}
                                   ref='aim' value={this.state.defaultInput}
                                   onChange={this.onAimChange}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-7">
                            <input className="form-control" type="date" ref='date' value={this.state.defaultDate} onChange={this.onDateChange}/>
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

export default AddTodo;

AddTodo.propTypes ={
    addTodo : PropTypes.func,
    labels: PropTypes.object
};