import React, { Component } from 'react';
import DebounceInput from 'react-debounce-input';

class Search extends Component{
    render(){
        let { searchChange } = this.props;
        return (
            <div className="search-bar navbar">
                <DebounceInput minLength={2} debounceTimeout={1000} onChange = {searchChange} type="text" placeholder="Search" />
            </div>
        );
    }
}

export default Search;