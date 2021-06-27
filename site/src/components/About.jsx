import React from 'react';
import "./../CSS/about.css";
import ContactGrid from "./About/ContactGrid";
import Team from "./About/Team";

const Home = () => {
    return ( 
        <div>
            <ContactGrid />
            <Team />
        </div>
     );
}
 
export default Home;