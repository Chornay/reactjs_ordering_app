import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

import {
  Container,
  Card, Button, CardTitle, CardBody,
  CardText, CardImg, CardSubtitle, CardDeck,
  Row, Col, Collapse, Navbar,
  NavbarToggler, NavbarBrand, Nav, NavItem,
  NavLink, UncontrolledDropdown, DropdownToggle,
  DropdownMenu, DropdownItem,
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";

import ForOneMenuScreen from "../screens/ForOneMenuScreen";
import ShareMenuScreen from "../screens/ShareMenuScreen";

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
      <div>
        <Navbar color="white" light>
          <div class="container">
            <NavbarBrand onClick={this.toggle}>
              <span class="navbar-toggler-icon" />
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Sign In</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>

        <div className="App">
          <Container>
            <Row
              style={{
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <a style={{ padding: 10 }} href="/">
                For One
              </a>
              <a style={{ padding: 10 }} href="/share/">
                Share
              </a>
              <a style={{ padding: 10 }} href="/deals/">
                Deals
              </a>
              <Col class="float-right">
                <p style={{ textAlign: "right" }}>RM 10.00</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Route path="/" exact component={ForOneMenuScreen} />
        <Route path="/share/" component={ShareMenuScreen} />
        <Route path="/about/" component={ShareMenuScreen} />

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
