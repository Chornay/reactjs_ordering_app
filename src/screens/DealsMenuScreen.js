import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import deal_promotions from '../images/deal_promotions.png'
import deal_spicy_gochujang_a from '../images/deal_spicy_gochujang_a.png'
import deal_spicy_gochujang_3pc from '../images/deal_spicy_gochujang_3pc.png'
import deal_spicy_gochujang_sauce from '../images/deal_spicy_gochujang_sauce.png'
import deal_spicy_prawn from '../images/deal_spicy_prawn.png'
import deal_zwb_combo_delivery from '../images/deal_zwb_combo_delivery.png'
import deal_zwb_megabox_delivery from '../images/deal_zwb_megabox_delivery.png'
import deal_zwb_alacarte_delivery from '../images/deal_zwb_alacarte_delivery.png'
import deal_mega_variety_box from '../images/deal_mega_variety_box.png'
import deal_pudding_mango from '../images/deal_pudding_mango.png'
import deal_pudding_gulamelaka from '../images/deal_pudding_gulamelaka.png'
import deal_pudding_caramel from '../images/deal_pudding_caramel.png'

import side_snack from '../images/side_snack.jpg'
import family_meals from '../images/family_meals.jpeg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'
import '../StyleDealScreen.css'

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
{/* Start order button */}
        {/* <div className="App"> */}
          <Container style={{backgroundColor:'#f3f0e2'}}>          
            <Row style={{padding:0}}>
              <Col>
                <Button style={{backgroundColor:"red"}} color="secondary" size="lg" block>START MY ORDER</Button>
              </Col>
            </Row>
{/* Promotions */}
            <Row style={{padding:20}}>
              <Col xs="12">
                <Card>
                  <CardImg top style={{height:150}} src={deal_promotions} alt="Card image cap" />
                </Card>  
              </Col>
            </Row>
 

            <h3 style={{textAlign: 'left', padding:20}}>DEALS</h3>
          
{/* Deal items 1 */}
            
            <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7" className="itemDescription"> 
                    <Media body>
                      <Media heading className="dealHeading"> 
                        <strong>Spicy Gochujang Crunch 2-pc Combo</strong>
                        <br/>
                        <strong>RM 17.90</strong>
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

{/* Deal items 2 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Spicy Gochujang Crunch 3-pc Combo</strong>
                        <br/>
                        <strong>RM 23.20</strong>
                      </Media>
                      <p className = "itemDescription">3 pieces of chicken, Spicy Honey Gochujang sauce, coleslaw, whipped potato, drink.</p>
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_spicy_gochujang_3pc} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 3 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Spicy Honey Gochujang Sauce</strong>
                        <br/>
                        <strong>RM 2.45</strong>
                      </Media>
                      {/* <strong className = "itemDescription"></strong>> */}
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#" >
                      <Media object className="dealImageSytle" src={deal_spicy_gochujang_sauce} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>
              
{/* Deal items 4 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>5-pc Hot & Spicy Prawns</strong>
                        <br/>
                        <strong>RM 11.55</strong>
                      </Media>
                      {/* <strong className = "itemDescription">2 pieces of chicken, Spicy and Honey Gochujang sauce, coleslaw, whipped potatos</strong>  */}
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_spicy_prawn} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 5 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Zinger Waffle Burger Combo</strong>
                        <br/>
                        <strong>RM 19.60</strong>
                      </Media>
                      <p className = "itemDescription">Zinger Waffle Burger, potato wedges, drink.</p>
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_zwb_combo_delivery} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 6 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Zinger Waffle Burger Mega Box</strong>
                        <br/>
                        <strong>RM 24.25</strong>
                      </Media>
                      <p className = "itemDescription">1 piece of chicken, Zinger Waffle Burger, potato wedges, drink.</p>
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_zwb_megabox_delivery} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 7 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Mega Variety Box</strong>
                        <br/>
                        <strong>RM 57.90</strong>
                      </Media>
                      <p className = "itemDescription">6 pieces of chicken, 12 pieces of nuggets, potato wedges, dip, whipped potato, drink.</p>
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_mega_variety_box} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 8 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Mango Peach Vanilla Pudding</strong>
                        <br/>
                        <strong>RM 1.90</strong>
                      </Media>
                      {/* <strong className = "itemDescription">2 pieces of chicken, Spicy and Honey Gochujang sauce, coleslaw, whipped potatos</strong>  */}
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_pudding_mango} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 9 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Gula Melaka Vanilla Pudding</strong>
                        <br/>
                        <strong>RM 1.90</strong>
                      </Media>
                      {/* <strong className = "itemDescription">2 pieces of chicken, Spicy and Honey Gochujang sauce, coleslaw, whipped potatos</strong>  */}
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_pudding_gulamelaka} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>

{/* Deal items 10 */}
              <Row xs="12" className="box">
                <Media tag="li">
                  <Col xs="7">
                    <Media body>
                      <Media heading className="dealHeading">
                        <strong>Salted Caramel Vanilla Pudding</strong>
                        <br/>
                        <strong>RM 1.90</strong>
                      </Media>
                      {/* <strong className = "itemDescription">2 pieces of chicken, Spicy and Honey Gochujang sauce, coleslaw, whipped potatos</strong>  */}
                    </Media>
                  </Col>
                  <Col xs="5">
                    <Media right href="#">
                      <Media object className="dealImageSytle" src={deal_pudding_caramel} alt="Generic placeholder image" />
                    </Media>            
                  </Col>
                </Media>
              </Row>
 {/* Header is not using  */}
            <header className="App-header">
            </header>

          </Container>         
        {/* </div> */}

      </div>
    );
  }
}


export default DealsMenuScreen;
