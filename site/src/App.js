import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
class App extends Component {
  render() { 
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;
