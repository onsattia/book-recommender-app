import React from "react";

import CollectionItem from "../collection-preview/CollectionPreview";

import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...props }) => (
          <CollectionItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
