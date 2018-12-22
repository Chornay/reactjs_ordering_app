import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import {
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap"


import ForOneMenuScreen from "../screens/ForOneMenuScreen"
import ShareMenuScreen from "../screens/ShareMenuScreen"
import DealsMenuScreen from "../screens/DealsMenuScreen"
import MenuListScreen from '../screens/MenuListScreen'
import MenuItemDetailScreen from '../screens/MenuItemDetailScreen'
import MainNavigation from "../components/MainNavigation";

class MainLayout extends Component {
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
      <div style={{backgroundColor:'#f3f0e2'}}>
        
        <MainNavigation toggle={this.toggle}/>

        <div className="sub-navigation" style={{backgroundColor:'white'}}>        
            <div className="container">
              <div className="row"
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <a style={{ padding:10, fontWeight:400, color:'black'}} href="/menu/for-one">
                  For One
                </a>
                <a style={{ padding:10, fontWeight:400, color:'black'}} href="/menu/share/">
                  Share
                </a>
                <a style={{ padding:10, fontWeight:400, color:'black'}} href="/menu/deals/">
                  Deals
                </a>
                <div className="col float-right">
                  <p style={{ textAlign: "right" }}>RM 10.00</p>
                </div>
              </div>
            </div>          
        </div>

        {/* The Menu Contents  */}
        <Switch>
          <Route path="/menu/" exact component={ForOneMenuScreen} />          
          <Route path="/menu/for-one" exact component={ForOneMenuScreen} />
          <Route path="/menu/for-one/chicken" exact component={MenuListScreen} />
          <Route path="/menu/item/:slug" exact component={MenuItemDetailScreen} />
          <Route path="/menu/share/" exact component={ShareMenuScreen} />
          <Route path="/menu/deals/" exact component={DealsMenuScreen} />
          </Switch>
        
        {/* MODAL */}
        <Modal
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          className={this.props.className}

        >
          <ModalBody style={{padding:8, margin:20, display:'flex'}}>            
            <ul style={{listStyle:'none'}}>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/notifications">Notifications</a></li>
                <li><a href="/login">Sign In</a></li>
            </ul>                       
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default MainLayout;
