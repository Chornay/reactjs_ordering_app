import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

import {
  Container,Row, Col, Navbar,
  NavbarBrand, Nav, NavItem,
  NavLink, Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap"

import ForOneMenuScreen from "../screens/ForOneMenuScreen"
import ShareMenuScreen from "../screens/ShareMenuScreen"
import DealsMenuScreen from "../screens/DealsMenuScreen"

import MenuListScreen from '../screens/MenuListScreen'
import MenuItemDetailScreen from '../screens/MenuItemDetailScreen'

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
        <nav className="navbar navbar-light bg-light"  color="white" light>
          <div className="container">
            <a className="navbar-brand" onClick={this.toggle}>
              <span className="navbar-toggler-icon" />
            </a>

            <nav className="ml-auto" navbar>
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login/">Sign In</a>
              </li>
              </ul>
            </nav>
          </div>
        </nav>

        <div className="App">
          <Container>
            <Row
              style={{
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <a style={{ padding: 10 }} href="/for-one">
                For One
              </a>
              <a style={{ padding: 10 }} href="/share/">
                Share
              </a>
              <a style={{ padding: 10 }} href="/deals/">
                Deals
              </a>
              <Col className="float-right">
                <p style={{ textAlign: "right" }}>RM 10.00</p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* The Screens  */}

        <Route path="/menu/" exact component={ForOneMenuScreen} />
        
        <Route path="/menu/for-one" exact component={ForOneMenuScreen} />
        <Route path="/menu/for-one/chicken" exact component={MenuListScreen} />
        <Route path="/menu/item/2-pc-combo" exact component={MenuItemDetailScreen} />

        <Route path="/menu/share/" exact component={ShareMenuScreen} />
        <Route path="/menu/deals/" exact component={DealsMenuScreen} />

        <Modal
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          className={this.props.className}
          style={{padding:0, margin:0, borderRadius:0}}
        >
          <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
          <ModalBody>
            
            <ul>
                <li><a>Menu</a></li>
                <li><a>Notifications</a></li>
                <li><a>Menu</a></li>
            </ul>
            
            

          </ModalBody>
          <ModalFooter>           
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MainLayout;
