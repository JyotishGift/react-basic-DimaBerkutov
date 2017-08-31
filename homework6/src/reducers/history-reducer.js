const historyReducer = (state = { historyBlock: [1000, 2000] }, action) => {
    console.log(action)
    return { ...state, historyBlock: state.historyBlock }
};
export default historyReducer;