import React, { Component } from 'react';
import logo from './logo.svg';
import kfc_promotion from './images/kfc_promotion.jpg'
import side_snack from './images/side_snack.jpg'
import family_meals from './images/family_meal.jpeg'
import desert from './images/desert.jpg'
import drink from './images/drink.jpeg'
import './App.css';
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
  DropdownItem } from 'reactstrap';

class App extends Component {
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
            <Row style={{backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
              <a style={{padding:10}} href="#">For one</a>  
              <a style={{padding:10}} href="#">Share</a>  
              <a style={{padding:10}} href="#">Deal</a>
              <Col class="float-right"><p style={{textAlign:'right'}}>RM 10.00</p></Col>
            </Row> 

            <Row style={{padding:20}}>
              <Col style={{backgroundColor:'white'}}>
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

            <image ></image>
s            <Row>
              <Col xs="6">
                <Card>
                  <CardImg top style={{height:150}} src={family_meals} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Family meals</CardTitle>
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

            <header className="App-header">
            </header>

          </Container>         
        </div>

      </div>
    );
  }
}


export default Share;
