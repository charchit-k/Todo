import React from 'react';
import '../App.css';

let Header = props =>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 css-header">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    )
};

export default Header;