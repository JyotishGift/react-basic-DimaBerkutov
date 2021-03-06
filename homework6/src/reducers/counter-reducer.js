const counterReducer = (state = { counter: 100 }, action) => {
    switch (action.type){
        case 'INC':
            return { ...state, counter: state.counter + 1 };
        case 'DEC':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};
export default counterReducer;