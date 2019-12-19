export const addBook = (myBooks, newBook) => {
  const existBook = myBooks.find(book => book.bookID === newBook.bookID);
  if (!existBook) return [...myBooks, newBook];
  return [...myBooks];
};
