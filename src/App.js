import React, { Component } from 'react';
import "change-styleguide/dist/boot.css";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import About from "./screens/Notifications";
import HireMe from "./screens/HireMe";
import Petition from "./screens/Petition";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/notifications" component={About}/>
            <Route path="/hireme" component={HireMe}/>
            <Route path="/petition" component={Petition}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
