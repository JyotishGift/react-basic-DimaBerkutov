const historyReducer = (state = { historyBlock: [1000, 2000] }) => {
    return { ...state, historyBlock: state.historyBlock }
};
export default historyReducer;