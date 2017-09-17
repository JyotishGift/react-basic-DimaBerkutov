const logMiddleware = store => next => action => {
  console.log('action type: ', action.type);
  next(action);
};

export default logMiddleware;
