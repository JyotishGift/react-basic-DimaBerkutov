

const selectedbookReducer = (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_RECEPT':
      return action.data
    default:
      return state;
  }
};

export default selectedbookReducer;
