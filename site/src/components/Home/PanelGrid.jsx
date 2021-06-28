import React, { Component } from 'react';
import Panel from "./Panel";

class PanelGrid extends Component {
  render() { 
    return ( 
    <div>
      <div class="panels-indent"></div>

      <div className="panel-grid">
          {this.props.images.map(( path ) => ( 
            <Panel image={path} />
          ))} 
      </div>
    </div> );
  }
}
 

export default PanelGrid;
