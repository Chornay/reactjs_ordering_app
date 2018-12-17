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

class ForOneMenuScreen extends Component {
   render() {
       return (
      <div>
        <Container>
        <Row style={{padding:20}}>
        <Col>
          <Button style={{backgroundColor:"red"}} color="secondary" size="lg" block>START MY ORDER</Button>
        </Col>
      </Row>

      <Row style={{padding:20}}>
        <Col xs="12">
          <Card>
            <CardImg top style={{height:150}} src={kfc_promotion} alt="Card image cap" />
          </Card>  
        </Col>
      </Row>

      <h3 style={{textAlign: 'left', padding:20}}>MEALS FOR ONE</h3>

      

      <Row xs="12">
        <Col xs="6">
          <Card onClick={()=>{console.log('here')}}>
            <CardImg top style={{height:150}} src={chicken_meal} alt="Card image cap" />
            <CardBody>
              <CardTitle><a href="/for-one/chicken">Chicken Meals</a></CardTitle>
            </CardBody>
          </Card>  
        </Col>
        <Col xs="6">
          <Card>
            <CardImg top style={{height:150}} src={buger_meals} alt="Card image cap" />
            <CardBody>
              <CardTitle>Burgers</CardTitle>
            </CardBody>
          </Card>  
        </Col>
        <Col xs="6">
          <Card>
            <CardImg top style={{height:150}} src={side_snack} alt="Card image cap" />
            <CardBody>
              <CardTitle>Sides and Snacks</CardTitle>
            </CardBody>
          </Card>  
        </Col>
        <Col xs="6">
          <Card>
            <CardImg top style={{height:150}} src={desert} alt="Card image cap" />
            <CardBody>
              <CardTitle>Deserts</CardTitle>
            </CardBody>
          </Card>  
        </Col>
        <Col xs="6">
          <Card>
            <CardImg top style={{height:150}} src={drink} alt="Card image cap" />
            <CardBody>
              <CardTitle>Drinks</CardTitle>
            </CardBody>
          </Card>  
        </Col>

      </Row>

        </Container>
                    
      </div>
       );
   }
}


export default ForOneMenuScreen;

