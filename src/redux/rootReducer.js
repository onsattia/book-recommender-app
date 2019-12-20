import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/reducer";
import booksReducer from "./books/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["books"]
};

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer
});

export default persistReducer(persistConfig, rootReducer);
