import React, { Component } from 'react';
import "./../CSS/dive-in.css";
import Depth from './DiveIn/Depth';
class DiveIn extends Component {
    DepthParameters=[
        {
            title:"0m",
            color1:"rgba(196,203,201,0) 0%",
            color2:"rgba(141,198,179,1) 100%"
        },
        {
            title:"100m",
            color1:"rgba(141,198,179,1) 0%",
            color2:"rgba(103,188,160,1) 100%"
        },
        {
            title:"200m",
            color1:"rgba(103,188,160,1) 0%",
            color2:"rgba(73,160,136,1) 100%"
        },
        {
            title:"500m",
            color1:"rgba(73,160,136,1) 0%",
            color2:"rgba(52,137,129,1) 100%"
        },
        {
            title:"1000m",
            color1:"rgba(52,137,129,1) 0%",
            color2:"rgba(32,101,109,1) 100%"
        },
        {
            title:"2500m",
            color1:"rgba(32,101,109,1) 0%",
            color2:"rgba(21,77,99,1) 100%"
        },
        {
            title:"5000m",
            color1:"rgba(21,77,99,1) 0%",
            color2:"rgba(5,41,71,1) 100%"
        },
        {
            title:"10000m",
            color1:"rgba(5,41,71,1) 0%",
            color2:"rgba(17,35,53,1) 100%"
        },
        {
            title:"11000m",
            color1:"rgba(17,35,53,1) 0%",
            color2:"rgba(22,27,43,1) 100%"
        },
        {
            title:"13000m",
            color1:"rgba(22,27,43,1) 0%",
            color2:"rgba(20,20,25,1) 100%"
        },
        {
            title:"16000m",
            color1:"rgba(20,20,25,1) 0%",
            color2:"rgba(10,11,17,1) 100%"
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
                ))}

                <div className="dive-in-end">
                    <h1>THIS IS THE FARTHEST WE CAN GO</h1>
                </div>
            </div>
         );
    }
}
 
export default DiveIn;