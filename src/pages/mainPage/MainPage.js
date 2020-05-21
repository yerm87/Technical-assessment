import React, { Component } from 'react';
import MainPhoto from '../../assets/mainPage.jpg';
import { Link } from 'react-router-dom'
import { MyContext } from '../../context';

class MainPage extends Component {
    static contextType = MyContext;

    render(){
        return (
            <div className="main-page"
                 style={{backgroundImage: `url(${MainPhoto})`,
                         backgroundPosition: 'center center',
                         backgroundSize: 'cover'}}>
                <h1 class="welcome-sign">Welcome to Apple</h1>
                <Link to={this.context.authenticated ? "/products" : '/sign_in'}>See our products</Link>
            </div>
        )
    }
}

export default MainPage;