import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';
import MainLayout from './layouts/MainLayout'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>        
        <Route path="/" component={MainLayout} />       
      </BrowserRouter>
    );
  }
}


export default App;
