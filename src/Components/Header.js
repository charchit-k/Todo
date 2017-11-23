import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
    constructor(){
        super();
        this.completeAll = this.completeAll.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    completeAll(){
        this.props.completeAll();
    }
    removeAll(){
        this.props.removeAll();
    }

    render() {
        return (
            <div className="container">
                <div className="row css-header">
                    <div className="col-sm-5">
                        <h2>{this.props.head.title}</h2>
                    </div>
                    <div className={`col-sm-7`}>
                        <button className='btn btn-default pull-left' type="button" onClick={this.completeAll}>
                            <span className='glyphicon glyphicon-edit'></span> {this.props.head.completeAll}
                        </button>
                        <button className='btn btn-danger pull-right' type="button" onClick={this.removeAll}>
                            <span className='glyphicon glyphicon-trash'></span> {this.props.head.removeAll}
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