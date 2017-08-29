import React, { Component } from 'react';
import Api from '../../../../api.service';
import './SignUp.css';

class SignUp extends Component {
    state = {
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    };
    updateInput = (e) => {
        const someName = e.target.name,
            someValue = e.target.value;
        return this.setState(prevState => {
            console.log('this.state:', this.state);
            return { [someName]: someValue };
        });
    }
    signUpConfirm = () => {
        if(
            this.state.email.length !== 0 && 
            this.state.name.length !==0 && 
            this.state.password.length !==0 &&  
            this.state.confirmPassword.length !== 0
        ){
            this.state.password == this.state.confirmPassword ?
            Api.signInUp(
                {
                    email: this.state.email, 
                    user: this.state.name, 
                    password: this.state.password
                }, 'signup') :
            alert('Passwords are not same!');
        }else alert('Please, enter login and password');

        
    }
    render() {
        return (
        <div className="SignUp">
            <form>
                <label htmlFor="email">Email: </label>
                <input onChange={this.updateInput} type="email" id="email" name="email" />
                <label htmlFor="name">Name: </label>
                <input onChange={this.updateInput} type="text" id="name" name="name" />
                <label htmlFor="password">Password: </label>
                <input onChange={this.updateInput} type="text" id="password" name="password" />
                <label htmlFor="confirmPassword">Confirm password: </label>
                <input onChange={this.updateInput} type="text" id="confirmPassword" name="confirmPassword" />
                <button type="button" onClick={
                    this.signUpConfirm
                    }>SignUp</button>
            </form>
        </div>
        );
    }
}

export default SignUp;