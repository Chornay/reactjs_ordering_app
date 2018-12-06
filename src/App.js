import React, { Component } from 'react';
import logo from './logo.svg';
import kfc_logo from './images/kfc_logo.png'
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
            <image ></image>
            <Row>

              <Col xs="6">
                <Card>
                  <CardImg top style={{height:150}} src={kfc_logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                  </CardBody>
                </Card>  
              </Col>
              <Col xs="6">
                <Card>
                  <CardImg top style={{height:150}} src={kfc_logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                  </CardBody>
                </Card>  
              </Col>
              <Col xs="6">
                <Card>
                  <CardImg top style={{height:150}} src={kfc_logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                  </CardBody>
                </Card>  
              </Col>
              <Col xs="6">
                <Card>
                  <CardImg top style={{height:150}} src={kfc_logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                  </CardBody>
                </Card>  
              </Col>
              <Col xs="6">
                <Card>
                  <CardImg top style={{height:150}} src={kfc_logo} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
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


export default App;
