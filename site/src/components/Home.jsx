import React, { Component } from 'react';
import "./../CSS/home.css";
import { Card1, Card2 } from "./../Images";
import CardsGrid from "./Home/CardsGrid";
import AnimalsGrid from "./Home/AnimalsGrid";
import PanelGrid from "./Home/PanelGrid";
import GlassNote from "./Home/GlassNote";
import MainIndent from "./Home/MainIndent";

class Home extends Component {
    constructor(props) {
        super(props);
      }
    render() { 
        return (
            <div>
                <MainIndent />
                <CardsGrid images={[
                        Card1,
                        Card2

                ]}/>
                <GlassNote />
                <AnimalsGrid />
                <PanelGrid />
            </div>
         );
    }
}
 
export default Home;