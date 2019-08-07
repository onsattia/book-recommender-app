import React, { Component } from "react";

import SHOP_DATA from "./Shop.data";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...props }) => (
          <CollectionPreview key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
