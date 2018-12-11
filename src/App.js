import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Share from './Share';

import './App.css';


import MenuScreen from './screens/MenuScreen'
import ShareMenuScreen from './screens/ShareMenuScreen'
import MainScreen from './screens/MainScreen'

class App extends Component {
  


  render() {
    return (
      <Router>        
        <Route path="/" component={MainScreen} />
        
      </Router>
    );
  }
}


export default App;
