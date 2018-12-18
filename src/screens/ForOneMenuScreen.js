import React, { Component } from 'react'

import {
  Card, CardTitle, CardBody,
  CardImg, Col
} from "reactstrap";

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

          {/* Header */}
          <div className='row' style={{ padding: 20 }}>
            <div className="col-12">
              <Card>
                <CardImg top style={{ height: 150 }} src={kfc_promotion} alt="Card image cap" />
              </Card>
            </div>
          </div>

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
          <div className="col-6" style={{padding:5}} onClick={()=>{ console.log('hi') }} >
            <div className="card" onClick={() => { console.log('here') }}>
              <img className="card-img-top" style={{ height: 150 }} src={meal.image} alt="Card cap"/>
              <div className='card-body' style={{height:50}}>
                <p className='card-title' style={{fontWeight:'500'}}><a href="/menu/for-one/chicken">{meal.name}</a></p>
              </div>
            </div>
          </div>
        )
      })
    )
  }

}


export default ForOneMenuScreen;

