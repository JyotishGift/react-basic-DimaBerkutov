const searchDish = (value) => {
    return {
      type: 'DISHES_SEARCH',
      data: value
    };
}
export default searchDish;
