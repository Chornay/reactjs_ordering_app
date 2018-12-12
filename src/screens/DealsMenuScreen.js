import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import deal_promotions from '../images/deal_promotions.png'
import deal_spicy_gochujang_a from '../images/deal_spicy_gochujang_a.png'
import side_snack from '../images/side_snack.jpg'
import family_meals from '../images/family_meals.jpeg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'
import '../StyleTest.css'

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
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class DealsMenuScreen extends Component {
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
            
        <div className="App">
          <Container>          
            

            <Row style={{padding:20}}>
              <Col style={{backgroundColor:'white'}}>
                <Button style={{backgroundColor:"red"}} color="secondary" size="lg" block>START MY ORDER</Button>
              </Col>
            </Row>

            <Row style={{padding:20}}>
              <Col xs="12">
                <Card>
                  <CardImg top style={{height:150}} src={deal_promotions} alt="Card image cap" />
                </Card>  
              </Col>
            </Row>
 

            <h3 style={{textAlign: 'left', padding:20}}>DEALS</h3>

            <div className="dealItem">
            <Row xs="12" className = "box">
              <Media tag="li">
                <Col xs="7">
                  <Media body>
                    <Media heading>
                      Item
                    </Media>
                    <p className = "itemDescription">2 pieces of chicken, Spicy and Honey Gochujang sauce, coleslaw, whipped potatos</p>
                  </Media>
                </Col>
                <Col xs="5">
                  <Media right href="#">
                    <Media object className="dealImageSytle" src={deal_spicy_gochujang_a} alt="Generic placeholder image" />
                  </Media>            
                </Col>
              </Media>
             </Row>
            </div>
            <header className="App-header">
            </header>

          </Container>         
        </div>

      </div>
    );
  }
}


export default DealsMenuScreen;
