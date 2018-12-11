import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import MainLayout from './layout/MainLayout'

class App extends Component {
  
  render() {
    return (
      <Router>        
        <Route path="/" component={MainLayout} />       
      </Router>
    );
  }
}


export default App;
