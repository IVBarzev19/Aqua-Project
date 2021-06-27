import React from 'react';
import CardsGrid from "./CardsGrid";
import PanelGrid from "./PanelGrid";
import MainIndent from "./MainIndent";

const Home = () => {
    return ( 
        <div>
            <MainIndent />
            <CardsGrid />
            <PanelGrid />
        </div>
     );
}
 
export default Home;