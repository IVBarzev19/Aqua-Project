import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AnimalCard extends Component {
  render() { 
    return ( 
      <Link to={this.props.image}  className="animal-card">
          <img
            src={this.props.image}
            alt={this.props.image}
          />
          <h1>It's a Fish</h1>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
      </Link>
  );
  }
}

export default AnimalCard;
