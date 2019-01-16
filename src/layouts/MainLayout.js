import React, { Component } from "react";
import { Route, Link, Switch, withRouter } from "react-router-dom";

import { connect } from 'react-redux'
import * as types from '../redux/types'

import ForOneMenuScreen from "../screens/ForOneMenuScreen";
import ShareMenuScreen from "../screens/ShareMenuScreen";
import DealsMenuScreen from "../screens/DealsMenuScreen";
import MenuListScreen from "../screens/MenuListScreen";
import MenuItemDetailScreen from "../screens/MenuItemDetailScreen";
import MainNavigation from "../components/MainNavigation";


class MainLayout extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f3f0e2" }}>
        <div style={{ backgroundColor: "white" }}>
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 8,
                paddingBottom: 8
              }}
            >
              
              {/* {this.props.location.pathname} */}
              
              <div >
                <a                  
                  href="/menu/for-one"
                  className={this.props.location.pathname === '/menu/for-one' ? 'Menu-Selected' : 'Menu'}
                >
                  For One
                </a>
                <a
                  className={this.props.location.pathname === '/menu/share' ? 'Menu-Selected' : 'Menu'}
                  href="/menu/share"
                >
                  Share
                </a>
                <a
                  className={this.props.location.pathname === '/menu/deals' ? 'Menu-Selected' : 'Menu'}
                  href="/menu/deals"
                >
                  Deals
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 8
                }}
              >
                <a href='/delivery/cart' >
                <span style={{ marginRight: 16 }}>
                  {this.props.counter}
                </span>
                <span style={{ textAlign: "right", fontWeight: "700" }}>
                  RM 10.00
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The Menu Contents  */}
        <Switch>
          <Route path="/menu/" exact component={ForOneMenuScreen} />
          <Route path="/menu/for-one" exact component={ForOneMenuScreen} />
          <Route
            path="/menu/for-one/chicken"
            exact
            component={MenuListScreen}
          />
          <Route
            path="/menu/item/:slug"
            exact
            component={MenuItemDetailScreen}
          />
          <Route path="/menu/share/" exact component={ShareMenuScreen} />
          <Route path="/menu/deals/" exact component={DealsMenuScreen} />
        </Switch>
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

function mapsDispatchToProps(dispatch){
  return {
    increaseCounter: ()=> dispatch({type: types.INCREASE_COUNTER}),
    decreaseCounter: ()=> dispatch({type: types.DECREASE_COUNTER}),    
  }
}

export default connect(mapStateToProps,mapsDispatchToProps)(withRouter(MainLayout));
