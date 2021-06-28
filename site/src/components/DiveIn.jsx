import React, { Component } from 'react';
import "./../CSS/dive-in.css";
import Depth from './DiveIn/Depth';
class DiveIn extends Component {
    render() { 
        return ( 
            <div>
                <Depth depth="0m"/>
                <Depth depth="50m"/>
                <Depth depth="100m"/>
                <Depth depth="150m"/>
            </div>
         );
    }
}
 
export default DiveIn;