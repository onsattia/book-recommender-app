import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CartIcon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";

import { toggleCartHidden } from "../../../redux/cart/action";

import { selectCartItemsCount } from "../../../redux/cart/selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
