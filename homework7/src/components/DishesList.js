import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import selectDish from '../actions/index';

class DishesList extends Component {
  render() {
    const { dishes, ingridients, selectDish, searchDishes, addDishes } = this.props;
    let searchDishesArr = dishes.filter(elem => {
        return elem.name.slice(0, searchDishes.length) == searchDishes;
    });
    if(addDishes){
      searchDishesArr.push({id: searchDishesArr.length, name: addDishes});
      // ingridients.concat(ingridients, addDishes[1])
      // console.log('addDishes1', addDishes[0])
      // console.log('addDishes2', addDishes[1])
    }
    return (
      <div className="dish-list">
        {searchDishesArr.map((elem, key) => (
          <li key ={key}
            onClick={() => {
              selectDish(elem);
            }}>
            {elem.name}
          </li>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    ingridients: state.ingridients,
    searchDishes: state.searchDishes,
    addDish: state.addDishes,
    addDishes: state.addDishes
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { selectDish: selectDish },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesList);
