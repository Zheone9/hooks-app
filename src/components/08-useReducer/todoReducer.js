export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action?.payload];
    case "delete":
      //Borrar un todo con el index
      //   let newState = [...state];
      //   newState.splice(action.payload, 1);
      return state.filter((todo) => todo.id !== action.payload);

    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
};
