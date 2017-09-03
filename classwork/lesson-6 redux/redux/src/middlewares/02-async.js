const asyncDispatch = storage => next => action => {
  if (typeof action === 'function') {
    return action(storage.dispatch);
  }
  return next(action);
};

export default asyncDispatch;
