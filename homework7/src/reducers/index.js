import { combineReducers } from 'redux';

import selectedDishReducer from './reducer_selectedDish';
import dishesReducer from './reducer_dishes';
import selectDishIngridientsReducer from './reducer_ingridients';
import searchReducer from './reducer_search';
import addDishReducer from './reducer_addDish';

const rootReducer = combineReducers({
    selectedDish: selectedDishReducer,
    dishes: dishesReducer,
    ingridients: selectDishIngridientsReducer,
    searchDishes: searchReducer,
    addDishes: addDishReducer
})


export default rootReducer;
