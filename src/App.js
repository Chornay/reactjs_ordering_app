import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import './App.css';
// import MainLayout from './layouts/MainLayout'
import MenuItemDetailScreen from './screens/MenuItemDetailScreen'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>        
        {/* <Route path="/" component={MainLayout} />        */}
        
        <Route path="/" component={MenuItemDetailScreen} />       
      </BrowserRouter>
    );
  }
}


export default App;
