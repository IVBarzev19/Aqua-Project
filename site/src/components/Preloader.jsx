import React from "react";

const Preloader = () => {
  return (
    <div id="preloader">
        <svg height="50vh" width="35vw">
		    <polygon points="250,10 140,160 360,160" className="triangle" />
            <polygon points="250,60 160,190 340,190" className="triangle" />
            <polygon points="250,110 180,220 320,220" className="triangle" />
	    </svg>
    </div>
  );
};

export default Preloader;
