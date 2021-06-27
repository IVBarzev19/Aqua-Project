import React from 'react';
import CardsGrid from "./CardsGrid";
import PanelGrid from "./PanelGrid";
import MainIndent from "./MainIndent";
import Navbar from "./Navbar";

const Home = () => {
    return ( 
        <div>
            <MainIndent />
            <Navbar />
            <CardsGrid />
            <PanelGrid />
        </div>
     );
}
 
export default Home;