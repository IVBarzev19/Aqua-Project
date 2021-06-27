import React, { Component } from 'react';
import Card from "./Card";

class CardsGrid extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
    <div>

      <div class="cards-indent"></div>

      <div className="card-back">
        <div className="card-grid">
          {this.props.images.map(( path ) => ( 
            <Card image={path} />
           ))} 
        </div>
      </div>

      <div className="cards-indent-reversed"></div>

    </div> );
  }
}
 
export default CardsGrid;