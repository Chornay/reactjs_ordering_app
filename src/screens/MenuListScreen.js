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

class MenuListScreen extends Component {
   render() {
       return (
         <div>
        <Row style={{padding:20}}>
        <Col style={{backgroundColor:'white'}}>
          <Button style={{backgroundColor:"red"}} color="secondary" size="lg" block>START MY ORDER</Button>
        </Col>
      </Row>


      <h3 style={{textAlign: 'left', padding:20}}>Chicken Meals</h3>

      
      <Row>
        <Col xs="12">
          <Card >
            
            <CardBody>
            <img top style={{width:150}} src={chicken_meal} />
              <a href="/item/2-pc-combo">2-PC COMBO</a>
            </CardBody>
          </Card>  
        </Col>
        
      </Row>
      </div>
       );
   }
}


export default MenuListScreen;

