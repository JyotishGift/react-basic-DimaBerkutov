const historyReducer = (state = { historyBlock: 0 }) => {
    // historyBlock.push(...counter);
    // console.log(historyBlock, counter)
    return { ...state, historyBlock: state.historyBlock }
};
export default historyReducer;