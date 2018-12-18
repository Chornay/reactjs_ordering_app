import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import kfc_promotion from '../images/kfc_promotion.jpg'
import chicken_meal from '../images/chicken_meal.jpeg'
import buger_meals from '../images/buger_meals.jpg'
import side_snack from '../images/side_snack.jpg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'
import StartMyOrderButton from '../components/StartMyOrderButton';

class ForOneMenuScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: 'Chicken Meals', slug: 'chicken', image: chicken_meal },
        { name: 'Burgers', slug: 'burgers', image: buger_meals },
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
          <StartMyOrderButton />

<<<<<<< HEAD
      
=======
          {/* Header */}
          <div className='row' style={{ padding: 20 }}>
            <div className="col-12">
              <div className="card">
                <img className='card-img' top style={{ height: 150 }} src={kfc_promotion} alt="Card cap" />
              </div>
            </div>
          </div>
>>>>>>> c6714d7b45e1fa6d5152a82b0181146482649948

          {/* Title */}
          <h3 style={{ textAlign: 'left', padding: 20 }}>MEALS FOR ONE</h3>

          {/* Contents */}
          <div className="row">
            {this.renderMeals()}
          </div>
        </div>

      </div>
    );
  }

  renderMeals() {
    return (

      this.state.data.map((meal) => {
        return (
          
          <div className="col-6 item-meal" style={{padding:5}} >
          <Link to="/menu/for-one/chicken">
            <div className="card" >
              <img className="card-img-top img-thumbnail img-fluid" style={{ height: 150, borderRadius:0, border:0 }} src={meal.image} alt="cap"/>
              <div className='card-body' style={{height:50, paddingLeft:8}}>
                <p style={{fontWeight:'500'}}><a href="/menu/for-one/chicken">{meal.name}</a></p>
              </div>
            </div>
            </Link>
          </div>
          
        )
      })
    )
  }

}


export default ForOneMenuScreen;

