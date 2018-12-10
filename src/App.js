import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Share from './Share';

import './App.css';


import MenuScreen from './screens/MenuScreen'
import ShareMenuScreen from './screens/ShareMenuScreen'
import MainScreen from './screens/MainScreen'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <Router>        
        <Route path="/" component={MainScreen} />
        
      </Router>
    );
  }
}


export default App;
