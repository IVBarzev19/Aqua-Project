import React from 'react';
import "./../CSS/home.css";
import CardsGrid from "./Home/CardsGrid";
import AnimalsGrid from "./Home/AnimalsGrid";
import PanelGrid from "./Home/PanelGrid";
import GlassNote from "./Home/GlassNote";
import MainIndent from "./Home/MainIndent";

const Home = () => {
    return ( 
        <div>
            <MainIndent />
            <CardsGrid />
            <GlassNote />
            <AnimalsGrid />
            <PanelGrid />
        </div>
     );
}
 
export default Home;