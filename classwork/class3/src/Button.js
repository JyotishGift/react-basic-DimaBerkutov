import React, { Component } from 'react';

class Header extends Component{
    componentWillReceiveProps(nextProps){
        console.log('çurrent props', this.props);
        console.log('next props', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.counter % 3 == 0;
    }
    render(){
        return (
            <h1>
                {this.props.counter}
            </h1>
        )
    }
}

export default Header;