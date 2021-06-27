import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
class App extends Component {
  render() { 
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;
