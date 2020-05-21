import React from 'react';

const Input = props => {
    const classList = ['form-element'];

    if(!props.valid){
        classList.push('form-invalid')
    }

    switch(props.type){
        case('email'):
            return (
                <div className={classList.join(' ')}>
                    <label for="email">Email</label>
                    <input id="email" 
                           type="email" 
                           value={props.value} 
                           placeholder="user@gmail.com"
                           onChange={props.callbackOnChange} />
                </div>
            ) 
        case('password'):
            return (
                <div className={classList.join(' ')}>
                    <label for="password">Password</label>
                    <input id="password" 
                           type="password" 
                           value={props.value} 
                           placeholder="password"
                           onChange={props.callbackOnChange} />
                </div>
            )
        case('fullName'):
            return (
                <div className={classList.join(' ')}>
                    <label for="fullName">Full Name</label>
                    <input id="fullName" 
                           type="text" 
                           value={props.value} 
                           placeholder="Full Name"
                           onChange={props.callbackOnChange} />
                </div>
            )
    }
}

export default Input