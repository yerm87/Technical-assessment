import React from 'react';
import Logo from '../UI_Elements/Logo';
import BurgerButton from '../UI_Elements/BurgerButton';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <div className="navigation-items">
            <Logo />
            <div className="menu-items">
                <NavigationItem item="iphone" name="IPhone" />
                <NavigationItem item="mackbook" name="MacBook Pro" />
                <NavigationItem item="watch" name="Watch" />
                <BurgerButton />
            </div>
        </div>
    )
}

export default NavigationItems;