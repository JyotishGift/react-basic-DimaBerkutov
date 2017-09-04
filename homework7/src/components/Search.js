import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import searchDish from '../actions/search';

class Search extends Component {
    render() {
        const { dishes, searchDish } = this.props;        
        return (
            <div>
                <input onChange={(e) => {
                    searchDish(e.target.value);
                }} type="text" placeholder="search"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        dishes: state.dishes,
        searchDishes: state.searchDishes
    };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { searchDish: searchDish },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);