import React, { Component } from 'react';

class Search extends Component{
    render(){
        return (
            <div className="search-bar navbar">
                <input type="text" placeholder="Search" />
            </div>
        )
    }
}

export default Search;