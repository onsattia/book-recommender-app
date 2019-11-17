import React, { Component } from "react";
import axios from "axios";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

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
            <CollectionPreview key={isbn} {...props} />
          ))}
        </div>
      </div>
    );
  }
}

export default Shop;
