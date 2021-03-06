import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MyContext } from '../../../context';

class NavItemForMobile extends Component {
    static contextType = MyContext;

    navigate = () => {
        this.context.setCurrentItem(this.props.item);
        this.context.showOrClose();
        
        if(!this.context.authenticated){
            this.props.history.push('/sign_in');
        } else {
            this.props.history.push(`/products/${this.props.item}`);
        }
    }

    render(){
        return (
            <p className={this.props.classlist}
               onClick={() => this.navigate()}>{this.props.name}</p>
        )
    }
}

export default withRouter(NavItemForMobile);