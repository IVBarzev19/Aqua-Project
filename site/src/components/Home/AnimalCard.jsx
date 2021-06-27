import React, { Component } from 'react';
class AnimalCard extends Component {
  render() { 
    return ( 
      <div className="animal-card">
        <img
          src={this.props.image}
          alt="image"
        />
        <h1>It's a Fish</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </p>
      </div>
  );
  }
}

export default AnimalCard;
