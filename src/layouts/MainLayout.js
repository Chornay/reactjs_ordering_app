import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";


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
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                paddingTop:8,
                paddingBottom:8,
              }}
            >
              <div>
              <a
                style={{ padding: 10, fontWeight: 400, color: "black" }}
                href="/menu/for-one"
              >
                For One
              </a>
              <a
                style={{ padding: 10, fontWeight: 400, color: "black" }}
                href="/menu/share/"
              >
                Share
              </a>
              <a
                style={{ padding: 10, fontWeight: 400, color: "black" }}
                href="/menu/deals/"
              >
                Deals
              </a>
              </div>

              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', paddingRight:8}}>
                <span style={{marginRight:16}}>0</span>
                <span style={{ textAlign: "right", fontWeight:'700' }}>RM 10.00</span>
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

export default MainLayout;
