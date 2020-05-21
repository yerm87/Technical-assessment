import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import './App.css';
import NavigationItems from './components/NavigationItems/NavigationItems';
import NavItemsForMobile from './components/navItemsForMobile/NavItemsForMobile';
import MainPage from './pages/mainPage/MainPage';
import SignIn from './pages/SignInPage/SignInPage';
import SignUp from './pages/signUpPage/SignUpPage';
import Products from './pages/Products/Products';
import ItemPage from './pages/ItemPage/ItemPage';
import { Route, Switch } from 'react-router-dom';
import { MyContext } from './context';

class App extends Component {

    static contextType = MyContext;

    render(){
        const itemPageComponent = this.context.authenticated ? ItemPage : SignIn;
        const signUpComponent = this.context.authenticated ? MainPage : SignUp;
        const signInComponent = this.context.authenticated ? MainPage : SignIn;
        const productsComponent = this.context.authenticated ? Products : SignIn;
        
        return (
            <div className="wrapper">
                <NavItemsForMobile />
                <Toolbar>
                    <NavigationItems />
                </Toolbar>
                <Switch>
                    <Route path="/sign_up" component={signUpComponent} />
                    <Route path="/sign_in" component={signInComponent} />
                    <Route path="/products/:item" component={itemPageComponent} />
                    <Route path="/products" component={productsComponent} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </div>
        )
    }
}

export default App;