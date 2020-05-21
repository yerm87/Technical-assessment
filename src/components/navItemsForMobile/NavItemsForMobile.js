import React, { useContext } from 'react';
import { MyContext } from '../../context';
import NavItemForMobile from './navItemForMobile/NavItemForMobile';

const NavItemsForMobile = (props) => {
    const context = useContext(MyContext);

    const classList = ['navItems-For-Mobile']
    const show = context.showNavigationItems;

    const classListForItem = ['nav-item-mobile'];

    if(show){
        classList.push('navItems-For-Mobile-Active')
        classListForItem.push('nav-item-mobile-active');
    }


    return (
        <div className={classList.join(' ')}>
            <NavItemForMobile classlist={classListForItem.join(' ')} 
                              name="IPhone"
                              item="iphone" />
            <NavItemForMobile classlist={classListForItem.join(' ')} 
                              name="MacBook Pro"
                              item="mackbook" />
            <NavItemForMobile classlist={classListForItem.join(' ')} 
                              name="Watch"
                              item="watch" />
        </div>
    )
}

export default NavItemsForMobile;