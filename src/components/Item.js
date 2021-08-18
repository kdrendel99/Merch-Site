import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 5
    }
  }

  render() {
    return(
      <React.Fragment>
        <div onClick = {() => this.props.whenItemClicked(this.props.id)}>
          <h3>{this.props.name}</h3>
          <h5>${this.props.price}</h5>
          <hr/>
        </div>
      </React.Fragment>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;