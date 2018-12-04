import React, { Component } from 'react';
import logo from './logo.svg';
import kfc_logo from './kfc_logo.png'
import './App.css';
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
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
      <div className="App">
        <div class = "Container">          

        <div>
          <Button color="primary">FOR ONE </Button>{' '}
          <Button color="secondary">SHARE</Button>{' '}
          <Button color="success">DEALS</Button>{' '}
          <Button color="info">RM0.00</Button>{' '}
        </div>

        </div><Button style={{backgroundColor:"red"}} class="start-order" size="lg" block>Block level button</Button>          

        <div>
         <Card>
          <CardImg style={{width: '100%', height: '200px'}} top width="100%" src={kfc_logo} alt="Card image cap" />
         </Card>  
        </div>
        <header className="App-header">
          <h3 class="menu-style">MEAL FOR ONE</h3>      
        </header>

        <div>
          <CardDeck>
          <Row>
            <Card>
              <CardImg style={{width: '80px', height: '80px'}} top width="100%" src={kfc_logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg style={{width: '80px', height: '80px'}} top width="100%" src={kfc_logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <Button>Button</Button>
              </CardBody>
          </Card>
          </Row>

          <Row>
            <Card>
              <CardImg style={{width: '80px', height: '80px'}} top width="100%" src={kfc_logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg style={{width: '80px', height: '80px'}} top width="100%" src={kfc_logo} alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <Button>Button</Button>
              </CardBody>
          </Card>
          </Row>
        </CardDeck>  
      </div>
       
      </div>
    );
  }
}


export default App;
