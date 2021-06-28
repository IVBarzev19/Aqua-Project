import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Panel extends Component {
  render() { 
    return (
      <Link to={this.props.image} className="panel-grid-item">
        <img
        src={this.props.image}
        alt="image"
        />
        <div className="panel-item-title">
          <h1>History of Oceanography</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Link>
    );
  }
};

export default Panel;
