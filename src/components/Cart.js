import React from 'react';


function Cart(props){
  return(
    <React.Fragmemt>
      <h1>My Cart</h1>
      <ul>
        <li>{props}</li>
      </ul>

    </React.Fragmemt>
  )
}

export default Cart;