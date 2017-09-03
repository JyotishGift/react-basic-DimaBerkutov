// Что возвращает reducer ?
// state

const recepts = [
  {
    id: 0,
    name: 'pizza',
    ingridients: [
      { name: 'cheeze', quanity: 2 },
      { name: 'milk', quanity: 1 }
    ]
  },
  { id: 1, name: 'omelette', ingridients: [] },
  { id: 2, name: 'potato', ingridients: [] }
];

const recepts = [
  { name: 'pizza', id: 1 },
  { name: 'pizza', id: 2 }
];

const ingridients = [
  { name: 'milk', quanity: 1, recept_id: 1 },
  { name: 'eggs', recept_id: 1, quanity: 2 },
  { name: 'potato', recept_id: 2, quanity: 2 }
];

// Чистая функция
// новый массив
function reducerRecipes(state, action) {
  switch (action.type) {
    case 'ADD_INGRIDIENTS':
      return state.map(recepts => {
        if (recepts.id === action.payload.receptId) {
          return {
            ...recepts,
            ingridients: [
              ...recepts.ingridients,
              action.payload.recept
            ]
          };
        }
      });
      return {
        ...recepts,
        ingridients: [...recepts.ingridients]
      };
  }
}

function ingridientsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_INGRIDIENTS':
      return [...state, action.recept];
  }
}

reducerRecipes(recepts, {
  type: 'ADD_INGRIDIENTS',
  payload: {
    recept: { name: 'salt', quanity: 1 },
    receptId: 0
  }
});

const add = (a, b) => {
  return a + b;
};

const addUnpure = (a, b) => {
  return a + b + Users.get({ id: 10 }).secretNumber();
};
// side-effect
add(3, 3);
add(3, 3);
add(3, 3);
add(3, 3);

addUnpure(3, 3);
addUnpure(3, 3);
addUnpure(3, 3);
addUnpure(3, 3);
