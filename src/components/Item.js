import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>${props.price}</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;