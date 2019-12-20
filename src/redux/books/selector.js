import { createSelector } from "reselect";

const selectBook = state => state.books.myBooks;

export const selectBookItems = createSelector([selectBook], myBooks => myBooks);
