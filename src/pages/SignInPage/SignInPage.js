import React, { Component } from 'react';
import Input from '../../components/UI_Elements/Input';
import { Link, Redirect } from 'react-router-dom';
import { MyContext } from '../../context';

class SignInPage extends Component {

    static contextType = MyContext;

    state={
        elements: [
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
        submitted: false,
        errorMessage: ''
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
                this.setState({
                    errorMessage: 'All Fields must be filled'
                })
            }
        });

        this.setState({
            formIsValid: valid,
        }, () => {
            if(this.state.formIsValid){
                this.setState({
                    errorMessage: ''
                })

                const registeredUsers = localStorage.getItem('registeredUsers');

                if(registeredUsers === null){
                    this.setState({
                        formIsValid: false,
                        errorMessage: 'such user does not exist'
                    })
                } else if(registeredUsers !== null){
                    const allUsers = localStorage.getItem('registeredUsers');
                    const usersList = JSON.parse(allUsers);

                    const email = this.state.elements[0].value;
                    const password = this.state.elements[1].value;

                    const user = {
                        email: email,
                        password: password
                    }

                    const index = usersList.findIndex(item => item.email === user.email && 
                        item.password === user.password);
                    
                        if(index !== -1){
                            const element = usersList[index];
                            
                            const time = new Date().getTime()
                            element.previousVisit = time;

                            usersList[index] = element;

                            const authenticated = true;

                            localStorage.setItem('registeredUsers', JSON.stringify(usersList));
                            localStorage.setItem('authenticated', JSON.stringify(authenticated));
                            
                            this.setState({
                                submitted: true
                            }, () => {
                                this.context.authenticate();
                            });
                        }
                }
            }
        })
    }

    render(){
        const inputElements = this.state.elements.map(element => <Input type={element.type}
                                                            value={element.value}
                                                            valid={this.state.formIsValid}
                            callbackOnChange={(event) => {this.onChangeHandler(event, element.type)}} />)
        
        let component;

        component = (
            <div className="form-wrapper">
                <form className="form">
                    <h1>Sign-In</h1>
                    <p>{this.state.errorMessage}</p>
                    {inputElements}
                    <button onClick={(event) => this.onSubmitHandler(event)}>Sign-In</button>
                </form>
                <p>Not regirstered? <Link to="/sign_up">Sign-up</Link></p>
            </div>
        )

        if(this.state.submitted){
            component = <Redirect to={{
                pathname: '/'
            }} />;
        }

        return component; 
    }
}

export default SignInPage;