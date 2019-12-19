import axios from "axios";

export const addBook = book => ({
  type: "ADD_BOOK",
  payload: book
});

export const getBooks = () => dispatch => {
  axios
    .get("/books")
    .then(res =>
      dispatch({
        type: "GET_BOOKS",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};
