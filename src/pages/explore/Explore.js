import React, { Component } from "react";
import axios from "axios";

//Components
import BooksPreview from "../../components/BooksPreview/BooksPreview";

//Styling
import "./Explore.scss";

class Shop extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get(`/books`)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { books } = this.state;
    return (
      <div className="explore">
        <div className="preview">
          {books.map(({ isbn, ...props }) => (
            <BooksPreview key={isbn} {...props} />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
