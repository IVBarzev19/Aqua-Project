import React, { Component } from 'react';
import "./../CSS/dive-in.css";
import Depth from './DiveIn/Depth';
class DiveIn extends Component {
    DepthParameters=[
        {
            title:"0m",
            color1:"rgba(2,0,36,1) 0%",
            color2:"rgba(0,212,255,1) 100%"
        },
        {
            title:"50m",
            color1:"rgba(50,0,26,1) 0%",
            color2:"rgba(200,22,25,1) 100%"
        },
    ]
    render() { 
        return ( 
            <div>
                {this.DepthParameters.map(( Parameters ) =>(
                    <Depth title={Parameters.title} 
                           color1={Parameters.color1} 
                           color2={Parameters.color2} 
                    />
                ))};
            </div>
         );
    }
}
 
export default DiveIn;