const addDishReducer = (state = null, action) => {
    switch (action.type) {
      case 'ADD_DISH':
        return action.data
      default:
        return state;
    }
  };
  
  export default addDishReducer;
  