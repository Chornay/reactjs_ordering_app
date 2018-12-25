import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import MenuItemDetailScreen from './screens/MenuItemDetailScreen'
import SignInScreen from './screens/SignInScreen'
import NoMatchScreen from './screens/NoMatchScreen'
import './styles/App.css'
import NotificationMainScreen from './screens/NotificationsMainScreen';
import MainNavigation from './components/MainNavigation';

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
      <BrowserRouter>
      <div>
        <MainNavigation toggle={this.toggle} />      
        <Switch> 
          <Route path="/menu" component={MainLayout} />
          <Route path="/login" component={SignInScreen} /> 
          <Route path="/notifications" component={NotificationMainScreen} />        
          <Redirect from="/" exact to="/menu/for-one" />
          {/* <Route path="/" component={MenuItemDetailScreen} /> */}
          <Route component={NoMatchScreen}/>
        </Switch>
        
        {/* MODAL */}
        <Modal
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalBody style={{ padding: 8, margin: 20, display: "flex" }}>
            <ul style={{ listStyle: "none" }}>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/notifications">Notifications</a>
              </li>
              <li>
                <a href="/login">Sign In</a>
              </li>
            </ul>
          </ModalBody>
        </Modal>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
