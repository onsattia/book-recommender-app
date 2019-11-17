import React from "react";

//Styling
import "./Book.scss";

const Book = ({ src }) => {
  return (
    <div className="menu-item">
      <img className="image" src={src} alt="" />
      <div>Rate this book</div>
      <div className="rating">
        <input type="radio" name="star" id="star1" />
        <label htmlFor="star1"></label>

        <input type="radio" name="star" id="star2" />
        <label htmlFor="star2"></label>

        <input type="radio" name="star" id="star3" />
        <label htmlFor="star3"></label>

        <input type="radio" name="star" id="star4" />
        <label htmlFor="star4"></label>

        <input type="radio" name="star" id="star5" />
        <label htmlFor="star5"></label>
      </div>
    </div>
  );
};

export default Book;
