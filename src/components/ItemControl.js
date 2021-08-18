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

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.merchList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedItem != null){
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} />
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