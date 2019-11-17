import React, { Component } from "react";
import axios from "axios";

//Components
import Book from "../Book/Book";

//Styling
import "./Directory.scss";

class Directory extends Component {
  state = {
    mostRatedBooks: [],
    mostReviewedBooks: [],
    highlyRatedAuthors: [],
    authorsWithMostBooks: []
  };

  componentDidMount() {
    axios
      .get(`/mostRatedBooks`)
      .then(res => this.setState({ mostRatedBooks: res.data }))
      .catch(err => console.log(err));

    axios
      .get(`/mostReviewedBooks`)
      .then(res => this.setState({ mostReviewedBooks: res.data }))
      .catch(err => console.log(err));

    axios
      .get(`/highlyRatedAuthors`)
      .then(res => this.setState({ highlyRatedAuthors: res.data }))
      .catch(err => console.log(err));

    axios
      .get(`/authorsWithMostBooks`)
      .then(res => this.setState({ authorsWithMostBooks: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    let mostRatedBooks,
      mostReviewedBooks,
      highlyRatedAuthors,
      authorsWithMostBooks;

    if (
      this.state.mostRatedBooks == null ||
      this.state.mostReviewedBooks == null ||
      this.state.highlyRatedAuthors == null ||
      this.state.authorsWithMostBooks == null
    ) {
      return <div>Loading...</div>;
    } else {
      mostRatedBooks = this.state.mostRatedBooks.map(res => (
        <Book key={res.isbn} title={res.title} src={res.image_url} />
      ));
      mostReviewedBooks = this.state.mostReviewedBooks.map(res => (
        <Book key={res.isbn} title={res.title} src={res.image_url} />
      ));
      highlyRatedAuthors = this.state.highlyRatedAuthors.map((res, index) => (
        <div key={index}>
          <h3>{res.authors}</h3>
        </div>
      ));
      authorsWithMostBooks = this.state.authorsWithMostBooks.map(
        (res, index) => (
          <div key={index}>
            <h3>
              {res.authors} with
              <span> {res.title} Publications of Books</span>
            </h3>
          </div>
        )
      );
    }

    return (
      <div className="directory-menu">
        <div className="item">
          <h1>Highly Rated Books</h1>
          {mostRatedBooks}
        </div>
        <div className="item">
          <h1>Books With Most Reviews</h1>
          <div>{mostReviewedBooks}</div>
        </div>
        <div className="item">
          <h1>Highly Rated Authors</h1>
          {highlyRatedAuthors}
        </div>
        <div className="item">
          <h1>Authors With Most Books</h1>
          {authorsWithMostBooks}
        </div>
      </div>
    );
  }
}

export default Directory;
