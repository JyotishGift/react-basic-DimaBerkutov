const selectedbookReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'BOOK_SELECT':
      return action.data
    default:
      return state;
  }
};

export default selectedbookReducer;
