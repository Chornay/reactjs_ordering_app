import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import deal_promotions from '../images/deal_promotions.png'
import kfc_promotion from '../images/kfc_promotion.jpg'
import side_meal from '../images/side_meal.png'
import sub_mega_variety from '../images/sub_mega_variety.png'
import desert from '../images/desert.png'
import drink from '../images/drink.png'

import StartMyOrderButton from '../components/StartMyOrderButton';

class ShaerMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Family meals', slug: 'familyMeals', image: sub_mega_variety },
        { name: 'Sides and Snacks', slug: 'sides', image: side_meal },
        { name: 'Deserts', slug: 'deserts', image: desert },
        { name: 'Drinks', slug: 'drinks', image: drink },
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="container">

          <StartMyOrderButton />

          <div className="row" style={{ padding: 0 }}>
            <div className="col">
              <div className="card">
                <img style={{ width: '100%', maxHeight: 300 }} src={deal_promotions} alt="Card cap" />
              </div>
            </div>
          </div>

          <h3 style={{
            textAlign: 'left', padding: 0,
            marginTop: 16
          }}>SHARE</h3>

          <div className="row" style={{ padding: 8 }}>
            {this.renderMeals()}
          </div>

          <header className="App-header">
          </header>

        </div>

      </div>
    );
  }

  renderMeals() {
    return (

      this.state.data.map((meal) => {
        return (
          <div className="col-6 item-meal" style={{ padding: 3 }} >
            <Link to="#">
              <div className="card" >
                <div className="thumbnail" style={{ height: 200, overflow: 'hidden' }}>
                  <img className="card-img-top img-thumbnail img-fluid" style={{ width: '100%', borderRadius: 0, border: 0 }} src={meal.image} alt="cap" />
                </div>
                <div className='card-body' style={{ height: 50, paddingLeft: 8 }}>
                  <p style={{ fontWeight: '500' }}><a href="/menu/for-one/chicken">{meal.name}</a></p>
                </div>
              </div>
            </Link>
          </div>

        )
      })
    )
  }

}

export default ShaerMenuScreen; 
