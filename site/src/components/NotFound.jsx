import React from 'react';
import "./../CSS/not-found.css";
import Gif404 from "./../images/404.gif";
const NotFound = () => {
    return ( 
        <div>
            <div className="not-found">
                <div>
                    <h1>Couldn't Find The Page You Are Looking For</h1>
 
                    <img src={ Gif404 } alt="penguin"/>
                </div>
            </div>
 
            <div className="not-found-end">
                <h1>HERE'S A DANCING PENGUIN INSTEAD</h1>
            </div>
        </div>
     );
}
 
export default NotFound;