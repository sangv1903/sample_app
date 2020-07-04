import React, { Component } from "react";
import Nav from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/contact";
import Landing from "./components/landing";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={Landing}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
