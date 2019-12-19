import { createSelector } from "reselect";

const selectBook = state => state.myBooks;

export const selectBookItems = createSelector(
  [selectBook],
  book => book.bookItems
);
