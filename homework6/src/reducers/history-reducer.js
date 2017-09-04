const historyReducer = (state = { historyBlock: [] }, action) => {
    console.log(state)
    console.log(action)
    return { ...state, historyBlock: state.historyBlock }
};
export default historyReducer;