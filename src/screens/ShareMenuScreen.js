import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import kfc_promotion from '../images/kfc_promotion.jpg'
import side_snack from '../images/side_snack.jpg'
import family_meals from '../images/family_meals.jpeg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'

import StartMyOrderButton from '../components/StartMyOrderButton';

class ShaerMenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Family meals', slug: 'familyMeals', image: family_meals },
        { name: 'Sides and Snacks', slug: 'sides', image: side_snack },
        { name: 'Deserts', slug: 'deserts', image: desert },
        { name: 'Drinks', slug: 'drinks', image: drink },
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="container">

            <StartMyOrderButton/>

            <div className="row" style={{padding:0}}>
              <div className="col">
                <div className="card">
                  <img className="card-img-top" style={{height:150}} src={kfc_promotion} alt="Card image cap" />
                </div>  
              </div>
            </div>

            <h3 style={{textAlign: 'left', padding:0,
          marginTop: 16}}>SHARE</h3>
            
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
                <img className="card-img-top img-thumbnail img-fluid" style={{ height: 150, borderRadius: 0, border: 0 }} src={meal.image} alt="cap" />
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
