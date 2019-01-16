import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom'

// REDUX
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import * as types from './redux/types'

import MainLayout from './layouts/MainLayout'
import MenuItemDetailScreen from './screens/MenuItemDetailScreen'
import SignInScreen from './screens/SignInScreen'
import NoMatchScreen from './screens/NoMatchScreen'
import './styles/App.css'
import NotificationMainScreen from './screens/NotificationsMainScreen';
import MainNavigation from './components/MainNavigation';

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Sidebar from './components/Sidebar'

import DeliveryCartScreen from './screens/DeliveryCartScreen';
import CheckDeliveryCoverageScreen from './screens/CheckDeliveryCoverageScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import DeliveryOptionScreen from './screens/DeliveryOptionsScreen';
import DeliveryUserDetailsScreen from './screens/DeliveryUserDetailsScreen';
import DeliveryPrepareForChangeScreen from './screens/DeliveryPrepareForChangeScreen';
import CheckoutPaymentSuccessfulScreen from './screens/CheckoutPaymentSuccessfulScreen';

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

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer);



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
      <div id="page-wrap">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <MainNavigation toggle={()=>{this.toggle()}} />      
        <Switch> 
          <Route path="/login" component={SignInScreen} />
          <Route path="/menu" component={MainLayout} />

          <Route path="/delivery/cart" component={DeliveryCartScreen} />

          <Route path="/delivery/user-detail" component={DeliveryUserDetailsScreen}/>

          <Route path="/delivery/cash-change" component={DeliveryPrepareForChangeScreen}/>

          <Route path="/delivery/order-success" component={CheckoutPaymentSuccessfulScreen}/>


          <Route path="/delivery/order-option" component={DeliveryOptionScreen} />          
          <Route path="/delivery/check-location" component={CheckDeliveryCoverageScreen} />

          <Route path="/delivery/checkout" component={CheckoutScreen}/>
          
           
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
