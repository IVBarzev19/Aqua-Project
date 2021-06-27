import React, { Component } from 'react';

class Card extends Component {
  render() { 
    return ( 
    <a className="card">
      <img
        src={this.props.image}
        alt="image"
      />
      <div className="card-title">
        <h1>Title</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </a> 
  );
  }
}
 
export default Card;
