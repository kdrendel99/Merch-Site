import React from "react";
import ItemList from "./ItemList";

class ItemControl extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      itemDetailsVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      itemDetailsVisibleOnPage: !prevState.itemDetailsVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttomText = null;
    if (this.state.itemDetailsVisibleOnPage){
      currentlyVisibleState = <ItemDetail />
      buttonText = "Return to merch list";
    } else {
      currentlyVisibleState = <ItemList />
      buttonText = "Details";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default ItemControl;