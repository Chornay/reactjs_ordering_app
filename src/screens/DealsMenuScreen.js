import React, { Component } from 'react';


import deal_promotions from '../images/deal_promotions.png'

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

import '../styles/DealScreen.css'

import {
  Card, CardImg,
  Row, Col, Media,
} from 'reactstrap';
import StartMyOrderButton from '../components/StartMyOrderButton';

class DealsMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[
        { name: 'Spicy Honey Gocujang Sauce', price: 2.45, description: '2 pieces of chicken, Spicy and Honey Gochujang sauce, coleslaw, whipped potatos', image: require('../images/deal_spicy_gochujang_3pc.png') },
        { name: 'Spicy Gochujang Crunch 3-pc Combo', price: 23.20, description: '3 pieces of chicken, Spicy Honey Gochujang sauce, coleslaw, whipped potato, drink., coleslaw, whipped potatos', image: deal_spicy_gochujang_3pc },
        { name: 'spicy Honey Gochujang Sauce', price: 2.45, description: '', image: deal_spicy_gochujang_3pc },
        { name: '5-pc Hot & Spicy Prawns', price: 11.55, description: '', image: deal_spicy_prawn },
        { name: 'Zinger Waffle Burger Combo', price: 19.60, description: 'Zinger Waffle Burger, potato wedges, drink.', image: deal_zwb_combo_delivery },
        { name: 'Zinger Waffle Burger Mega Box', price: 24.25, description: '1 piece of chicken, Zinger Waffle Burger, potato wedges, drink.', image: deal_zwb_megabox_delivery },
        { name: 'Mega Variety Box', price: 57.90, description: '6 pieces of chicken, 12 pieces of nuggets, potato wedges, dip, whipped potato, drink.', image: deal_mega_variety_box },
        { name: 'Mango Peach Vanilla Pudding', price: 1.90, description: '', image: deal_pudding_mango },
        { name: 'Gula Melaka Vanilla Pudding', price: 1.90, description: '', image: deal_pudding_gulamelaka },
        { name: 'Salted Caramel Vanilla Pudding', price: 1.90, description: '', image: deal_pudding_caramel },
      ]
    }
  }

  render() {
    return (
      // {/* Start order button */}
      <div className="container" style={{ backgroundColor: '#f3f0e2' }}>
        <StartMyOrderButton />
        {/* Promotions */}
        <div className="row" style={{ padding: 20 }}>
          <div className="col-12">
            <div className="card">
              <img className="card-img" top style={{ height: 150 }} src={deal_promotions} alt="Card cap" />
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: 'left', padding: 20 }}>DEALS</h3>
        <div className="col-12 box">
          {/*call funciton rendermeals*/}
          {this.renderMeals()}
        </div>

        {/* Header is not using  */}
        <header className="App-header">
        </header>
      </div>
    );
  }

  renderMeals() {
    return (

      this.state.data.map((meal) => {
        return (
          <Media tag="li" style={{marginBottom:10, backgroundColor:'white'}}>
            
              <Media body style={{padding:12}}>
                <Media heading className="dealHeading">
                  <strong>{meal.name}</strong>
                  <br />
                  <strong>RM{meal.price}</strong>
                </Media>
                <p className="itemDescription">{meal.description}</p>
              </Media>
            
            <div className="col-5">
              <Media right href="#">
                <Media object className="itemSytle" src={meal.image} alt="Generic placeholder image" />
              </Media>
            </div>
          </Media>

        )
      })
    )
  }
}



export default DealsMenuScreen;
