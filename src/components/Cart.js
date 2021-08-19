import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function Cart(props){
  return(
    <React.Fragment>
      <hr/>
      {props.userCartList.map((item) => 
        <Item
          // whenItemClicked = {props.onItemSelection}
          name={item.name}
          price={item.price}
          description={item.description}
          id={item.id}
          key={item.id}/>
      )}
    </React.Fragment>
  );
}

Cart.propTypes = {
  userCartList: PropTypes.array
};

export default Cart;