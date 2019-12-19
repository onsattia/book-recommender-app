import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import booksReducer from "./books/reducer";

export default combineReducers({
  user: userReducer,
  books: booksReducer
});
