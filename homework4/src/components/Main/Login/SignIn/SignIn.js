import React, { Component } from 'react';
import Api from '../../../../api.service';
import './SignIn.css';

class SignIn extends Component {
    state = {
        name: '',
        password: '',
    };
    updateInput = (e) => {
        const someName = e.target.name,
            someValue = e.target.value;
        return this.setState(prevState => {
            console.log('this.state:', this.state);
            return { [someName]: someValue };
        });
    }
    signInConfirm = () => {
        this.state.name.length !== 0 && this.state.password.length !== 0 ?
        Api.signInUp(
            {
                user: this.state.name,
                password: this.state.password
            }, 'login') :
        alert('Enter correct login and password');
        // console.log('this.state.name', this.state.name)
        // console.log('this.state.password', this.state.password)
        // Api.signInUp(
        //     {
        //         user: this.state.name,
        //         password: this.state.password
        //     }, 'login');
    }
    render() {
        const { signInConfirm } = this.props;
        return (
            // this.state.access === 'approved'?
            // <Redirect to={`/`} /> :  
        <div className="SignIn">
            <form>
                <label htmlFor="name">Name: </label>
                <input onChange={this.updateInput} type="text" id="name" name="name" required />
                <label htmlFor="password">Password: </label>
                <input onChange={this.updateInput} type="text" id="password" name="password" required />
                <button id="login" type="button" onClick={this.signInConfirm}>SignIn</button>
                {/* <button id="login" type="button" onClick={signInConfirm}>SignIn</button> */}
            </form>
        </div>
        );
    }
}

export default SignIn;