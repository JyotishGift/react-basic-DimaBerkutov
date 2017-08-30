const increment = document.querySelector('.inc');
const decrement = document.querySelector('.dec');
const counter = document.querySelector('.counter');

const reducer = (state = { counter: 0 }, action) => {
    switch (action.type){
        case 'INC':
            return { ...state, counter: state.counter++ };
        case 'DEC':
            return { ...state, counter: state.counter-- };
    }
    return state;
};

const store = Redux.createStore(reducer);

const render = () => {
    counter.innerHTML = store.getState();
};
store.subscribe(render);

increment.addEventListener('click', () => {
    store.dispatch({type: 'INC'});
});
decrement.addEventListener('click', () => {
    store.dispatch({type: 'DEC'});
});