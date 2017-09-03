const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'BOOKS_SEARCH':
            return action.data
        default:
            return state;
    }
};
  
 export default searchReducer;
  