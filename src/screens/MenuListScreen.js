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
<<<<<<< HEAD
   render() {
       return (
         <div>
        <Row style={{padding:20}}>
        <Col style={{backgroundColor:'white'}}>
          <Button style={{backgroundColor:"red"}} color="secondary" size="lg" block>START MY ORDER</Button>
        </Col>
      </Row>


      <h3 style={{textAlign: 'left', padding:20}}>Chicken Meals</h3>

      
      <Row>
        <Col xs="12">
          <Card >
            
            <CardBody>
            <img top style={{width:150}} src={chicken_meal} />
              <a href="/item/2-pc-combo">2-PC COMBO</a>
            </CardBody>
          </Card>  
        </Col>
=======
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
>>>>>>> c6714d7b45e1fa6d5152a82b0181146482649948
        
        </div>
      </div>
    );
  }
}


export default MenuListScreen;

