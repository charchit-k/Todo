import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
    constructor(){
        super();
        this.toggleAllTodos = this.toggleAllTodos.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    toggleAllTodos(){
        this.props.toggleAllTodos();
    }
    removeAll(){
        this.props.removeAll();
    }

    render() {
        return (
            <div className="container">
                <div className="row css-header">
                    <div className="col-sm-5">
                        <h2>My To-Do</h2>
                    </div>
                    <div className={`col-sm-7 css-action-btn`}>
                        <button className='btn btn-default pull-left' type="button" onClick={this.toggleAllTodos}>
                            <span className='glyphicon glyphicon-edit'></span> Toggle All
                        </button>
                        <button className='btn btn-danger pull-right' type="button" onClick={this.removeAll}>
                            <span className='glyphicon glyphicon-trash'></span> Remove All
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;

Header.propTypes ={
    completeAll : PropTypes.func,
    removeAll : PropTypes.func,
    head: PropTypes.object
};