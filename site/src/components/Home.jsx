import React, { Component } from 'react';
import "./../CSS/home.css";
import { 
    Card1, Card2, Card3,
    Card4, Card5, Card6,
    Animal1, Animal2, Animal3, Animal4, 
    Animal5, Animal6, Animal7, Animal8 
        } from "./../Images";
import CardsGrid from "./Home/CardsGrid";
import AnimalsGrid from "./Home/AnimalsGrid";
import PanelGrid from "./Home/PanelGrid";
import GlassNote from "./Home/GlassNote";
import MainIndent from "./Home/MainIndent";

class Home extends Component {
    render() { 
        return (
            <div>
                <MainIndent />
                <CardsGrid images={[
                    Card1,
                    Card2,
                    Card3,
                    Card4,
                    Card5,
                    Card6
                ]}/>
                <GlassNote />
                <AnimalsGrid images={[
                    Animal1,
                    Animal2,
                    Animal3,
                    Animal4,
                    Animal5,
                    Animal6,
                    Animal7,
                    Animal8
                ]}/>
                <PanelGrid />
            </div>
         );
    }
}
 
export default Home;