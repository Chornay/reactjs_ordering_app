import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

// REDUX
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as types from './redux/types'

import MainLayout from './layouts/MainLayout'
import MenuItemDetailScreen from './screens/MenuItemDetailScreen'
import SignInScreen from './screens/SignInScreen'
import NoMatchScreen from './screens/NoMatchScreen'
import './styles/App.css'
import NotificationMainScreen from './screens/NotificationsMainScreen';
import MainNavigation from './components/MainNavigation';

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import OrderDetailsScreen from './screens/OrderDetailsScreen';

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {

  // eslint-disable-next-line default-case
  switch (action.type) {
    case types.INCREASE_COUNTER:
      return { ...state, counter : state.counter + 1}
    case types.DECREASE_COUNTER:
      return { ...state, counter : state.counter - 1}
  }
  return state;

}

const store = createStore(reducer);

class App extends Component {

  constructor(props) {
    super(props);

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
      <Provider store={store}>
      <BrowserRouter>
      <div>
        <MainNavigation toggle={()=>{this.toggle()}} />      
        <Switch> 
          <Route path="/login" component={SignInScreen} />
          <Route path="/menu" component={MainLayout} />

          <Route path="/delivery/cart" component={OrderDetailsScreen} />
           
          <Route path="/notifications" component={NotificationMainScreen} />        
          <Redirect from="/" exact to="/menu/for-one" />
          {/* <Route path="/" component={MenuItemDetailScreen} /> */}
          <Route component={NoMatchScreen}/>
        </Switch>
        
        {/* MODAL */}
        <Modal
          isOpen={this.state.isOpen}
          toggle={()=>{this.toggle()}}
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
      </Provider>
    );
  }
}


export default App;
