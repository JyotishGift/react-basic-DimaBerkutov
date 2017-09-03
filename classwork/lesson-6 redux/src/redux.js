const increment = document.querySelector('.inc');
const decrement = document.querySelector('.dec');
const counter = document.querySelector('.counter');

// Immutable
const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INC':
      return { ...state, counter: state.counter + 1 };
    case 'DEC':
      return { ...state, counter: state.counter - 1 };
  }
  return state;
};

// pattern Observer, publish/subscribe
const createStore = reducer => {
  let state,
    listeners = [];

  const getState = () => state;
  const subscribe = listener => {
    listeners.push(listener);
    // [() => {}, () => {}]
  };

  const dispatch = action => {
    let newState = reducer(state, action);

    if (newState !== state) {
      state = newState;
      listeners.forEach(listener => {
        listener();
      });
    }
  };

  return { getState, subscribe, dispatch };
};

// Storage
const store = Redux.createStore(reducer);
// View
const render = () => {
  console.log(store.getState());
  counter.innerHTML = store.getState().counter;
};
store.subscribe(render);

// Actions
increment.addEventListener('click', () => {
  store.dispatch({ type: 'INC' });
});

decrement.addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});
