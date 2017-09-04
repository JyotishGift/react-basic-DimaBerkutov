const selectedDishReducer = (state = null, action) => {
  switch (action.type) {
    case 'DISH_SELECT':
      return action.data
    default:
      return state;
  }
};

export default selectedDishReducer;
