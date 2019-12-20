import React from "react";
import { connect } from "react-redux";

import { selectBookItems } from "../../redux/books/selector";
import { removeBook } from "../../redux/books/action";

import "./MyBooks.scss";

const MyBooks = ({ bookItems, removeBook }) => {
  return (
    <div className="myBooks">
      <div className="myBooks-header">
        <div className="header-block">
          <span>Cover</span>
        </div>
        <div className="header-block">
          <span>Title</span>
        </div>
        <div className="header-block">
          <span>Author</span>
        </div>
        <div className="header-block">
          <span>Avg rating</span>
        </div>
        <div className="header-block">
          <span>Your Rating</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {bookItems.map(book => (
        <div className="myBooks-item" id={book.bookID}>
          <div className="image-container">
            <img src={book.image_url} alt="book" />
          </div>
          <span className="title">{book.title}</span>
          <span className="author">{book.authors}</span>
          <span className="avg-rating">{book.average_rating}</span>
          <span className="your-rating">Your Rating</span>
          <div className="remove-button" onClick={() => removeBook(book)}>
            &#10005;
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  bookItems: selectBookItems(state)
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book))
});
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);
