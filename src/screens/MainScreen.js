import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
    Container,
    Card,
    Button,
    CardTitle,
    CardBody,
    CardText,
    CardImg,
    CardSubtitle,
    CardDeck,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import ForOneMenuScreen from './ForOneMenuScreen'
import ShareMenuScreen from './ShareMenuScreen'

class MainScreen extends Component {

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
                        <NavbarBrand href="/">𝝣</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Sign In</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>

                <div className="App">
                    <Container>
                        <Row style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <a style={{ padding: 10 }} href="/">For one</a>
                            <a style={{ padding: 10 }} href="/share/">Share</a>
                            <a style={{ padding: 10 }} href="/share/">Deals</a>
                            <Col class="float-right"><p style={{ textAlign: 'right' }}>RM 10.00</p></Col>
                        </Row>
                    </Container>
                </div>
                <Route path="/" exact component={ForOneMenuScreen} />
                <Route path="/share/" component={ShareMenuScreen} />
                <Route path="/about/" component={ShareMenuScreen} />
            </div>
        );
    }
}


export default MainScreen;
