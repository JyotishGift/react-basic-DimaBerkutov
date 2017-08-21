import React, { Component } from 'react';

class Items extends Component{
    render(){
        const { num, name, keys} = this.props;
        return (
                <li key = {keys}>
                    <span>{num}</span>
                    <span>{name}</span>
                </li>
        )
    }
}

export default Items;