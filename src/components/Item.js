import React from 'react';
import PropTypes from 'prop-types';

function Item(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <h5>${props.price}</h5>
      <p>{props.description}</p>
      <button>Buy Now!</button>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
};

export default Item;