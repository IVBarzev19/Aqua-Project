import React, { Component } from 'react';
import AnimalCard from "./AnimalCard";
class AnimalsGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <div>

      <div className="cards-indent"></div>

      <div className="card-back">
        <div className="animals-grid">
        {this.props.images.map(( path ) => ( 
            <AnimalCard image={path} />
           ))} 
        </div>
      </div>

      <div className="cards-indent-reversed"></div>

    </div>);
  }
}

export default AnimalsGrid;
