import React, { Component } from 'react';
// import AutoFitImage from 'react-image-autofit-frame';
import StartMyOrderButton from '../components/StartMyOrderButton';

import { connect } from 'react-redux';

import '../styles/DealScreen.css'

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


class DealsMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
        <div className="row" style={{ padding: 0 }}>
          <div className="col-12">
            <div className="card">
              <img className="card-img" top style={{ height: '100%', maxHeight:'300px' }} src={deal_promotions} alt="Card cap" />
            </div>
          </div>
        </div>

        <h3 style={{ textAlign: 'left', padding: 0, marginTop: 16 }}>DEALS</h3>
        <div className="col-12 box">
          {/*call funciton rendermeals*/}
          {this.renderMeals()}
        </div>

      </div>
    );
  }

  renderMeals() {
    return (

      this.state.data.map((meal) => {
        return (
          <div className="row-12">
          <div className="media" tag="li" style={{ marginBottom: 10, backgroundColor: 'white' }}>
          
          <div className="media-body" style={{ padding: 8 }}>
            <div heading className="dealHeading">
              <h1 style={{ fontWeight: '900' }}>{meal.name}</h1>
              <div style={{ marginTop:-10 }} />
              <h2 style={{ fontWeight: '500' }}>RM{meal.price}</h2>
            </div>
            <p className="itemDescription">{meal.description}</p>
          </div>

          <div className="col-6">
              <img object className="itemSytle" src={meal.image} alt="Generic placeholder" style={{height:'280px',width:'190px',alignSelf: 'cover',padding:'0'}} />
          </div>


          </div>
          </div>

        )
      })
    )
  }
}



export default connect()(DealsMenuScreen);
