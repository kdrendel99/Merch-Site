import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  function getQuantityText(quantity) {
    if (quantity === 0) {
      return "Out of stock!";
    }
    else {
      return `${quantity} left in stock`;
    }
  }

  const { item, onClickingBuy } = props;
  return(
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <h3>{item.price}</h3>
      <h3>{item.description}</h3>
      {/* ternary operator ? */}
      {/* <h3>{item.quantity === 0 ? "Out of Stock!" : `${item.quantity} left in stock`}</h3> */}
      <h3>{getQuantityText(item.quantity)}</h3>
      <button disabled={item.quantity === 0 ? true : false} onClick={() => onClickingBuy(item)}>Buy now!</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingBuy: PropTypes.func
}

export default ItemDetail;