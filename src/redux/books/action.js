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

export const removeBook = book => ({
  type: "REMOVE_BOOK",
  payload: book
});

export const getRecommendedBooks = title => dispatch => {
  axios
    .get(`/recommendation/${title}`)
    .then(res =>
      dispatch({
        type: "GET_RECOMMENDED_BOOKS",
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const emptyRecommendedBooks = () => ({
  type: "EMPTY_RECOMMENDEDBOOK"
});
