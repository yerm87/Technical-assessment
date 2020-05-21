import React, { Component } from 'react';
import axios from 'axios';

export const MyContext = React.createContext();

class DataWrapper extends Component {
    state = {
        showNavigationItems: false,
        currentItem: '',
        shippingDates: {},
        authenticated: false
    }

    componentDidMount(){
        axios.get('https://cors-anywhere.herokuapp.com/https://boalt-interview.herokuapp.com/api/shipping-dates')
        .then(response => {
            this.setState({
                shippingDates: response.data
            })
        })
    }

    showOrClose = () => {
        this.setState(() => {
            return {
                showNavigationItems: !this.state.showNavigationItems
            }
        }, () => {
            console.log(this.state.showNavigationItems)
        })
    }

    setCurrentItem = item => {
        this.setState({
            currentItem: item
        })
    }

    authenticate = () => {
        this.setState({
            authenticated: true
        })
    }

    render(){
        return (
            <MyContext.Provider value={{ ...this.state,
                                        showOrClose: this.showOrClose,
                                        setCurrentItem: this.setCurrentItem,
                                        authenticate: this.authenticate }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default DataWrapper