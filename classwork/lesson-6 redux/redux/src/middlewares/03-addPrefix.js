const addPrefix = storage => next => action => {
  console.log('Action type: ', action.type);
  action.type = action.type + '__'
  next(action);
};

export default addPrefix;
