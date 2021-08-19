import React from "react";
import ItemList from "./ItemList";
import ItemDetail from './ItemDetail';
import merchItems from "./../data/merchItems.js"

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      itemDetailVisibleOnPage: false,
      merchList: merchItems,
      selectedItem: null
    };
  }

  handleClick = () => {
    console.log("current state's merch list:");
    console.log(this.state.merchList);

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
    console.log("Buying!!!");

    if (item.quantity === 0) {
      return;
    }    

    const editedItem = {...item, quantity: item.quantity - 1};

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
      // buttonText = "Add Item"
    }



    // if (this.state.VisibleOnPage){
    //   currentlyVisibleState = <ItemDetail />
    //   buttonText = "Return to merch list";
    // } else {
    //   currentlyVisibleState = <ItemList />
    //   buttonText = "Details";
    // }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;