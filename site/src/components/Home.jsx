import React from 'react';
import "./../CSS/home.css";
import CardsGrid from "./Home/CardsGrid";
import PanelGrid from "./Home/PanelGrid";
import GlassNote from "./Home/GlassNote";
import MainIndent from "./Home/MainIndent";

const Home = () => {
    return ( 
        <div>
            <MainIndent />
            <CardsGrid />
            <GlassNote />
            <PanelGrid />
        </div>
     );
}
 
export default Home;