import React, { Component } from 'react';

class Search extends Component{
    searchBlock(){
        return (
            <div class="search-bar navbar">
                <input type="text" placeholder="Search" />
            </div>
        )
    }
}

export default Search;