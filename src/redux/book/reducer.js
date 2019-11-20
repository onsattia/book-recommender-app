import { addItemToCart } from "./utils";

const INITIAL_STATE = {
  myBooks: []
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        myBooks: addItemToCart(state.myBooks, action.payload)
      };
    default:
      return state;
  }
};

export default bookReducer;
