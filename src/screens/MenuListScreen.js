import React, { Component } from 'react'

import {
  Card, CardBody,
  Row, Col
} from "reactstrap";

import kfc_promotion from '../images/kfc_promotion.jpg'
import chicken_meal from '../images/chicken_meal.jpeg'
import buger_meals from '../images/buger_meals.jpg'
import side_snack from '../images/side_snack.jpg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'
import StartMyOrderButton from '../components/StartMyOrderButton';

class MenuListScreen extends Component {
  render() {
    return (
      <div className="container">

        <StartMyOrderButton />

        <h3 style={{ textAlign: 'left', padding: 20 }}>Chicken Meals</h3>


        <div className="row">
          <div className="col-12">
            <a href="/menu/item/2-pc-combo">
              <div className="card" >

                <CardBody>
                  <img top style={{ width: 150 }} src={chicken_meal} />
                  2-PC COMBO
              </CardBody>
              </div>
              </a>
          </div>
        
        </div>
      </div>
    );
  }
}


export default MenuListScreen;

