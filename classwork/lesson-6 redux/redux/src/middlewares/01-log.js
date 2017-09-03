const logMiddleware = storage => next => action => {
  console.log('Action type: ', action.type);
  
  next(action);
};

export default logMiddleware;
