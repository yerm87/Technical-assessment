import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import { MyContext } from '../../context';

class BurgerButton extends Component {
    static contextType = MyContext
    
    state={
        showItems: false
    }

    onClickHandler = () => {
        this.context.showOrClose();
    }

    render(){
        return (
            <div onClick={() => this.onClickHandler()} 
                 className="burger_button">
                <FaBars />
            </div>
        )
    }
}

export default BurgerButton;