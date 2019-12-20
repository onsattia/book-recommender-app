import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import Book from "../../components/Book/Book";
//Styling
import "./MyBooks.scss";

//Redux actions
import {
  removeBook,
  getRecommendedBooks,
  emptyRecommendedBooks
} from "../../redux/books/action";

class MyBooks extends Component {
  componentDidMount() {
    if (this.props.myBooks.length === 0) this.props.emptyRecommendedBooks();
    if (this.props.myBooks.length > 0) {
      let book = this.props.myBooks[
        Math.floor(Math.random() * this.props.myBooks.length)
      ];
      this.props.getRecommendedBooks(book.title);
    }
  }

  render() {
    const { myBooks, removeBook, recommendedBooks } = this.props;
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
        {myBooks.map(book => (
          <div className="myBooks-item" key={book.bookID}>
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
        <h1>Recommended For You</h1>
        {recommendedBooks !== null ? (
          <div>
            {recommendedBooks.map(res => (
              <Book key={res.isbn} title={res.title} src={res.image_url} />
            ))}
          </div>
        ) : (
          <div>
            <h1>You don't have any recommendation yet!</h1>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myBooks: state.books.myBooks,
  recommendedBooks: state.books.recommendedBooks
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  getRecommendedBooks: bookTitle => dispatch(getRecommendedBooks(bookTitle)),
  emptyRecommendedBooks: () => dispatch(emptyRecommendedBooks())
});
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);
