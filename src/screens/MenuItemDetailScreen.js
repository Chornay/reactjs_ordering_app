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

class MenuItemDetailScreen extends Component {


  state = {
    total_chicken: 3,
    chicken_ori: 4,
    chicken_spicy: 3,
  }

  increment = () => {
    if (this.state.chicken_spicy = this.state.chicken_spicy + 1) { }
    return this.state.chicken_ori = this.state.chicken_ori - 1;
  }




  render() {

    return (
      <div>
        <Row style={{ padding: 20 }}>
          <Col style={{ backgroundColor: 'white' }}>
            <Button style={{ backgroundColor: "red" }} color="secondary" size="lg" block>START MY ORDER</Button>
          </Col>
        </Row>

        <h3 style={{ textAlign: 'left', padding: 20 }}>Menu Item</h3>
        <image></image>

        <div>
          <img top style={{ width: 150 }} src={chicken_meal} />

          <h1>2-PC COMBO</h1>
          <button style={{ backgroundColor: 'red' }} onClick={this.state.increment}>-</button>
          {this.state.chicken_ori}
          <button style={{ backgroundColor: 'red' }}>+</button>


        </div>
      </div>
    );
  }
}



export default MenuItemDetailScreen;

