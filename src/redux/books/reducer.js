import { addBook } from "./utils";

const INITIAL_STATE = {
  books: [],
  myBooks: []
};

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        myBooks: addBook(state.myBooks, action.payload)
      };
    case "GET_BOOKS":
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};

export default booksReducer;
