const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'DISHES_SEARCH':
            return action.data
        default:
            return state;
    }
};
  
 export default searchReducer;
  