const selectDish = (dish) => {
  return {
      type: 'DISH_SELECT',
      data: dish
  };
}
export default selectDish;