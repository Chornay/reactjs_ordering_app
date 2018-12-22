import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import MenuItemDetailScreen from './screens/MenuItemDetailScreen'
import SignInScreen from './screens/SignInScreen'
import NoMatchScreen from './screens/NoMatchScreen'
import './styles/App.css'
import NotificationMainScreen from './screens/NotificationsMainScreen';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>  

          <Route path="/menu" component={MainLayout} />
          <Route path="/login" component={SignInScreen} /> 
          <Route path="/notifications" component={NotificationMainScreen} />        
          <Redirect from="/" exact to="/menu" />
          {/* <Route path="/" component={MenuItemDetailScreen} /> */}
          <Route component={NoMatchScreen}/>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
