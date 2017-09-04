import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import addDish from '../actions/action_addDish';

class DishActive extends Component {
  state = {
    ingridient: [],
    ingridientsList: []
  };
  ingridientsArr = [];
  render() {
    const { dishes, selectedDish, ingridients, addDish } = this.props;
    if (!selectedDish) {
      return <div className="dish-active">
                Добавте свой рецепт
                <div>
                  <div className="name">
                    Название: <input type="text" data="name" />
                  </div>
                  Ингридиенты:
                  <button type="button" onClick={() => {
                    let inputs =<div className="ingridients">
                                  <input type="text" data="ingridient" placeholder="ingridient"/>
                                  <input type="text" data="quantity" placeholder="quantity"/>
                                </div>
                      this.ingridientsArr.push(inputs);
                      return this.setState(prevState => {
                        return {
                          ingridient: this.ingridientsArr
                        }
                      })
                    }}>Add field</button>
                    {this.state.ingridient}
                </div>
                <button className="save" onClick={() => {
                  const name = document.querySelector('.name').querySelector('input').value;
                  const ingridientsArr = [...document.querySelectorAll('.ingridients')];
                  const ingridientsMapArr = ingridientsArr.map((elem, index) => {
                    return {recept_Id: dishes.length, name: elem.children[0].value, qantity: elem.children[1].value};
                    {/* return { ingridient: elem.children[0].value, qantity: elem.children[1].value }; */}
                  })
                  console.log('ingridients', ...ingridientsMapArr)
                  this.ingridientsList = ingridients.concat(...ingridientsMapArr);
                  console.log('this.ingridientsList', this.ingridientsList)
                  addDish(name);
                  }}>Save
                </button>
            </div>;
    }
    let ingridientsArr = this.ingridientsList.filter((elem, key) => {
      return elem.recept_Id === selectedDish.id
    })
    console.log('this.ingridientsList.filter', this.ingridientsList)
    console.log('ingridientsArr', ingridientsArr)
    return (
      <div className="dish-active">
        <div>название блюда: {selectedDish.name}</div>
        <div>ингридиенты:</div>
        <ul>
          {ingridientsArr.map((elem, index) => {
            return <li key={index}>{elem.name} Количество:{elem.qantity}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    selectedDish: state.selectedDish,
    ingridients: state.ingridients,
    addDishes: state.addDishes
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addDish: addDish },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DishActive);
