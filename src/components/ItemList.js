import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

function ItemList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) => 
        <Item
          whenItemClicked = {props.onItemSelection}
          name={item.name}
          price={item.price}
          description={item.description}
          id={item.id}
          key={item.id}/>
      )}
    </React.Fragment>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;