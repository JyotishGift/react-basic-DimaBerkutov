import React, { Component } from 'react';
import Items from './items';

const v = ((props) => {
    return props.children;
});
class Request extends Component{
    constructor(){
        super();
        this.url = 'https://api.github.com/users/dimaberkutov/repos';
        this.state = {
            data: []
        };
    }
    componentDidMount(){
        fetch(this.url).then(data => data.json()).then(data => {
            this.setState({ data: data});
        });
    }
    render(){
        return (
            <ul>
                {this.state.data.map((elem, index) => {
                    this.key = index; 
                    {/* return <RepoItem elem = {elem}/>; */}
                    return <Items num = {elem.id} name = {elem.name} keys = {this.key}/>;
                })}
            </ul>
        );
    }
}

export default Request;