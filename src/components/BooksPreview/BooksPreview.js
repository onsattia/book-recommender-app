import React from "react";
import Popup from "reactjs-popup";

import "./BooksPreview.scss";

const BooksPreview = ({ title, image_url, authors }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${image_url})`
      }}
    ></div>

    <div className="collection-footer">
      <div className="name">{title}</div>
      {/* <span className="price">{price}</span> */}
      <Popup
        trigger={
          <button inverted className="button">
            More Details
          </button>
        }
        position="left bottom"
        on="hover"
      >
        <Card title="Left Center" authors={authors} />
      </Popup>
    </div>
  </div>
);

const Card = ({ title, authors }) => (
  <div className="card">
    <div className="header">{title} position </div>
    <div className="content">Author :{authors}</div>
  </div>
);

export default BooksPreview;
