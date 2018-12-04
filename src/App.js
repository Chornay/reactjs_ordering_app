import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Container,
  Card,
  Button,
  CardTitle,
  CardBody,
  CardText,
  CardImg,
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
          <Row>
            <Col xs="3">For one </Col>
            <Col xs="2">Share</Col>
            <Col xs="2">Deal</Col>
            <Col xs="auto">RM</Col>
          </Row> 
          <div Class="Row">
          <Col style={{backgroundColor:"red"}}>START MY ORDER</Col>
          </div>
          <image ></image>

        </div>

        <div>
         <Card>
          <CardImg top width="100%" src="https://www.google.com/search?q=kfc+free+logo&rlz=1C1CHBF_enCA689CA689&source=lnms&tbm=isch&sa=X&ved=0ahUKEwif-NeC5IXfAhWUUn0KHfh9Cu8Q_AUIDigB&biw=1517&bih=772#imgrc=Y4Lvxs83C5VJ5M:" alt="Card image cap" />
        </Card>  
       </div>      
        <header className="App-header">
        </header>
      </div>
    );
  }
}


export default App;
