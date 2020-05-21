import React, { Component } from 'react';

class Toolbar extends Component {
    render(){
        return (
            <div className="toolbar">
                {this.props.children}
            </div>
        )
    }
}

export default Toolbar;