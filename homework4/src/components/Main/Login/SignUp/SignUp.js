import React, { Component } from 'react';
import api from '../../../../api.service';
import './SignUp.css';

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            name: '',
            password: '',
            confirmPassword: ''
        };
        this.updateInput = this.updateInput.bind(this);
    }
    updateInput(e){
        const someName = e.target.name,
            someValue = e.target.value;
        return this.setState(prevState => {
            console.log('this.state:', this.state);
            return { [someName]: someValue };
        });
    }
    signUpConfirm(email, name, password, confirmPassword){
        // if(email.length !== 0 && name.length !==0 && password.length !==0 &&  confirmPassword.length !== 0){
        //     if(password == confirmPassword) api.signIn(email, name, password, 'signup');
        //     else alert('Passwords are not same!');
        // }else alert('Please, enter login and password');

        api.signIn(email, name, password, 'signup');
        // api.signIn.bind(this, this.state.name, this.state.password, 'signin');
        // console.log('qeqwrweqrqewytreqrewrqtreqterwqtyyreqewtwryqreyreyerqyr', SignInUp)
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
                    this.signUpConfirm.bind(this,
                        this.state.email, 
                        this.state.name, 
                        this.state.password, 
                        this.state.confirmPassword)
                    }>SignUp</button>
                {/* <button type="button" onClick={
                    api.signUp.bind(this, this.state.email, this.state.name, this.state.password, 'signup')
                    }>SignUp</button> */}
            </form>
        </div>
        );
    }
}

export default SignUp;