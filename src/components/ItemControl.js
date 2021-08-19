import React from "react";
import ItemList from "./ItemList";
import ItemDetail from './ItemDetail';
import merchItems from "./../data/merchItems.js"
import Cart from "./Cart.js";

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemDetailVisibleOnPage: false,
      merchList: merchItems,
      cartList: [],
      selectedItem: null
    };
  }

  handleClick = () => {
    if (this.state.selectedItem != null){
      this.setState({
        itemDetailVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        itemDetailVisibleOnPage: !prevState.itemDetailVisibleOnPage
      }));
    }
  }

  handleBuy = (item) => {
    if (item.quantity === 0) {
      return;
    }    


    const editedItem = {...item, quantity: item.quantity - 1};

    const itemToAddToCart = {...editedItem};
    const editedCartList = this.state.cartList.concat(itemToAddToCart);
    <Cart cartList = {this.state.cartList}/>
    console.log(editedCartList);


    const editedMerchList = this.state.merchList
      .map(currentItem => {
        if (currentItem.id === editedItem.id) {
          return editedItem;
        }
        else {
          return currentItem;
        }
      });

    this.setState({
      merchList: editedMerchList,
      cartList: editedCartList,
      selectedItem: editedItem,
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.merchList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null){
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingBuy = {this.handleBuy}/>
      buttonText = "Return to merch list";
    }

    else{
      currentlyVisibleState = <ItemList itemList = {this.state.merchList} onItemSelection = {this.handleChangingSelectedItem} />;
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        {/* if the button text is not null, hide the button. if it contains text (and we're in the details page), show the "return to merch list" button */}
        {buttonText !== null ? <button onClick={this.handleClick}>{buttonText}</button> : null}
      </React.Fragment>
    );
  }
}

export default ItemControl;