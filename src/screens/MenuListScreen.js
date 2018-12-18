import React, { Component } from 'react'

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

import kfc_promotion from '../images/kfc_promotion.jpg'
import chicken_meal from '../images/chicken_meal.jpeg'
import buger_meals from '../images/buger_meals.jpg'
import side_snack from '../images/side_snack.jpg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'
import StartMyOrderButton from '../components/StartMyOrderButton';

class MenuListScreen extends Component {
  render() {
    return (
      <div className="container">

        <StartMyOrderButton />

        <h3 style={{ textAlign: 'left', padding: 20 }}>Chicken Meals</h3>

        <image ></image>

        <Row>
          <Col xs="12">
            <Card >

              <CardBody>
                <img top style={{ width: 150 }} src={chicken_meal} />
                <a href="/menu/item/2-pc-combo">2-PC COMBO</a>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}


export default MenuListScreen;

