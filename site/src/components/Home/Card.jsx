import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component {
  render() { 
    return ( 
    <Link to={this.props.image} className="card">
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
    </Link> 
  );
  }
}
 
export default Card;
