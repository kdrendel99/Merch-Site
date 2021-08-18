import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item } = props;
  return(
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <h3>{item.price}</h3>
      <h3>{item.description}</h3>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
}

export default ItemDetail;