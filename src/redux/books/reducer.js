import { addBook } from "./utils";

const INITIAL_STATE = {
  books: [],
  myBooks: [],
  recommendedBooks: []
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
    case "REMOVE_BOOK":
      return {
        ...state,
        myBooks: state.myBooks.filter(
          myBook => myBook.bookID !== action.payload.bookID
        )
      };
    case "GET_RECOMMENDED_BOOKS":
      return {
        ...state,
        recommendedBooks: action.payload
      };
    case "EMPTY_RECOMMENDEDBOOK":
      return {
        ...state,
        recommendedBooks: []
      };
    default:
      return state;
  }
};

export default booksReducer;
