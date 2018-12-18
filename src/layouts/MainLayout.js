import React, { Component } from "react"
import { Route, Link, Switch } from "react-router-dom"
import {
  Modal, ModalHeader, ModalBody, ModalFooter
} from "reactstrap"


import ForOneMenuScreen from "../screens/ForOneMenuScreen"
import ShareMenuScreen from "../screens/ShareMenuScreen"
import DealsMenuScreen from "../screens/DealsMenuScreen"
import MenuListScreen from '../screens/MenuListScreen'
import MenuItemDetailScreen from '../screens/MenuItemDetailScreen'

class MainLayout extends Component {
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
      <div style={{backgroundColor:'#f3f0e2'}}>
<<<<<<< HEAD
        <nav className="navbar navbar-light bg-light"  color="white">
=======
        <nav className="navbar navbar-light bg-light" color="white">
>>>>>>> c6714d7b45e1fa6d5152a82b0181146482649948
          <div className="container">
            <a className="navbar-brand" onClick={this.toggle} href="#">
              <span className="navbar-toggler-icon" />
            </a>
<<<<<<< HEAD

            <nav className="ml-auto" >
=======
            <nav className="ml-auto">
>>>>>>> c6714d7b45e1fa6d5152a82b0181146482649948
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/login/">Sign In</a>
              </li>
              </ul>
            </nav>
          </div>
        </nav>

<<<<<<< HEAD
        <div className="App">
          <div className="container">
            <div className="row"
              style={{
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <a style={{ padding: 10 }} href="/for-one">
                For One
              </a>
              <a style={{ padding: 10 }} href="/share/">
                Share
              </a>
              <a style={{ padding: 10 }} href="/deals/">
                Deals
              </a>
              <div  className=" col float-right">
                <p style={{ textAlign: "right" }}>RM 10.00</p>
              </div>
            </div>
          </div>
=======
        <div className="sub-navigation" style={{backgroundColor:'white'}}>        
            <div className="container">
              <div className="row"
                style={{
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <a style={{ padding:10, fontWeight:400, color:'black'}} href="/menu/for-one">
                  For One
                </a>
                <a style={{ padding:10, fontWeight:400, color:'black'}} href="/menu/share/">
                  Share
                </a>
                <a style={{ padding:10, fontWeight:400, color:'black'}} href="/menu/deals/">
                  Deals
                </a>
                <div className="col float-right">
                  <p style={{ textAlign: "right" }}>RM 10.00</p>
                </div>
              </div>
            </div>          
>>>>>>> c6714d7b45e1fa6d5152a82b0181146482649948
        </div>

        {/* The Screens  */}
        <Switch>
          <Route path="/menu/" exact component={ForOneMenuScreen} />          
          <Route path="/menu/for-one" exact component={ForOneMenuScreen} />
          <Route path="/menu/for-one/chicken" exact component={MenuListScreen} />
          <Route path="/menu/item/2-pc-combo" exact component={MenuItemDetailScreen} />
          <Route path="/menu/share/" exact component={ShareMenuScreen} />
          <Route path="/menu/deals/" exact component={DealsMenuScreen} />
          </Switch>
        <Modal
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          className={this.props.className}
<<<<<<< HEAD
          // style={{padding:0, margin:0, borderRadius:0}}
=======
>>>>>>> c6714d7b45e1fa6d5152a82b0181146482649948
        >
          <ModalHeader toggle={this.toggle}>Menu</ModalHeader>
          <ModalBody>            
            <ul>
                <li><a>Menu</a></li>
                <li><a>Notifications</a></li>
                <li><a>Menu</a></li>
            </ul>                       

          </ModalBody>
          <ModalFooter>           
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MainLayout;
