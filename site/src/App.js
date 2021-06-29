import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Article from "./components/Article";
import DiveIn from "./components/DiveIn";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import { 
  Card1, Card2, Card3,
  Card4, Card5, Card6,
  Animal1, Animal2, Animal3, Animal4, 
  Animal5, Animal6, Animal7, Animal8,
  Panel1, Panel2, Panel3, Panel4
      } from "./Images";

class App extends Component {
  images=[ Card1, Card2, Card3, Card4, Card5, Card6,
          Animal1, Animal2, Animal3, Animal4, Animal5, Animal6, Animal7, Animal8,
          Panel1, Panel2, Panel3, Panel4 ];

  render() { 
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/dive-in" component={DiveIn} />
            <Route path="*" component={NotFound} />
            {this.images.map(( path ) => ( 
              <Route path={path} component={Article} />
              ))};
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;
