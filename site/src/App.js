import "./App.css";
import React, { Component } from 'react';
import CardsGrid from "./components/CardsGrid";
import PanelGrid from "./components/PanelGrid";
import MainIndent from "./components/MainIndent";
import Navbar from "./components/Navbar";
class App extends Component {
  render() { 
    return (
      <div className="App">
        <MainIndent />
        <Navbar />
        <CardsGrid />
        <PanelGrid />
      </div>
    );
  }
}
 
export default App;
