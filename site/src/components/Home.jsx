import React from 'react';
import CardsGrid from "./Home/CardsGrid";
import PanelGrid from "./Home/PanelGrid";
import MainIndent from "./Home/MainIndent";

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