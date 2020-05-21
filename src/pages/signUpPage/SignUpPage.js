import React, { Component } from 'react';
import Input from '../../components/UI_Elements/Input';
import { Redirect } from 'react-router-dom';

class SignUpPage extends Component {
    state={
        elements: [
            {
                type: 'fullName',
                value: ''
            },
            {
                type: 'email',
                value: ''
            },
            {
                type: 'password',
                value: ''
            }
        ],
        formIsValid: true,
        submitted: false
    }

    onChangeHandler = (event, type) => {
        const elements = this.state.elements;
        const value = event.target.value;

        const item = elements.find(element => element.type === type)
        
        item.value = value;

        this.setState({
            elements: elements
        });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        let valid = true;
        this.state.elements.forEach(element => {
            if(element.value === ''){
                valid = false;
            }
        });

        this.setState({
            formIsValid: valid
        }, () => {
            if(this.state.formIsValid){
                const registeredUsers = localStorage.getItem('registeredUsers');

                const fullName = this.state.elements[0].value;
                const email = this.state.elements[1].value;
                const password = this.state.elements[2].value;

                const user = {
                    fullName: fullName,
                    email: email,
                    password: password,
                    previousVisit: ''
                }

                if(registeredUsers === null){
                    const users = [];

                    users.push(user);

                    const strValue = JSON.stringify(users);
                    localStorage.setItem('registeredUsers', strValue);
                } else {
                    const data = localStorage.getItem('registeredUsers');
                    const allUsers = JSON.parse(data);
                    
                    localStorage.removeItem('registeredUsers');
                    
                    allUsers.push(user);
                    const strValue = JSON.stringify(allUsers);
                    localStorage.setItem('registeredUsers', strValue);
                }

                this.setState({
                    submitted: true
                });
            }
        });
    }

    render(){
        const inputElements = this.state.elements.map(element => <Input type={element.type}
                                                                        value={element.value}
                                                                        valid={this.state.formIsValid}
                            callbackOnChange={(event) => {this.onChangeHandler(event, element.type)}} />)
        
        let component = (
            <div className="form-wrapper">
                <form className="form">
                    <h1>Sign-Up</h1>
                    <p>{this.state.formIsValid ? '' : 'All Fields must be filled'}</p>
                    {inputElements}
                   <button onClick={(event) => this.onSubmitHandler(event)}>Sign-Up</button>
                </form>
            </div>
        )

        if(this.state.submitted){
            component = <Redirect to={{
                pathname: '/sign_in'
            }} />;
        }

        return component;
    }
}

export default SignUpPage;