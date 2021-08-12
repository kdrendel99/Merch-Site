import React from 'react';
import Item from './Item';

const merchList = [
  {
    name: "Macho Dirt Tee Shirt",
    price: 24.99,
    description: "The coolest, most rad tee shirt you could ever want."
  },
  {
    name: "Macho Dirt Baseball Tee",
    price: 29.99,
    description: "Cause what's better than Macho Dirt and baseball?."
  },
  {
    name: "Macho Dirt Self Titles Album CD",
    price: 9.99,
    description: "Good tunage for your morning commute."
  },
  {
    name: "Macho Dirt Vinyl",
    price: 29.99,
    description: "For the analog enthusiast/wanna be hipsters."
  },
  {
    name: "Macho Dirt Baseball Cap",
    price: 14.99,
    description: "Keep the sun out of your eyes while representing the coolest band in history."
  }
];

function ItemList(){
  return(
    <React.Fragment>
      <hr/>
      {merchList.map((item, index) =>
      <Item
      name={item.name}
      price={item.price}
      description={item.description}
      key={index}/>
      )}
    </React.Fragment>
  );
}

export default ItemList;