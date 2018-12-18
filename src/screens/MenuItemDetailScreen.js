import React, { Component } from 'react'


import kfc_promotion from '../images/kfc_promotion.jpg'
import chicken_meal from '../images/chicken_meal.jpeg'

import buger_meals from '../images/buger_meals.jpg'
import side_snack from '../images/side_snack.jpg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'
import StartMyOrderButton from '../components/StartMyOrderButton';

class MenuItemDetailScreen extends Component {

  constructor(props){

    super(props);

    this.state = {    
      chicken_total: 6,
      chicken_ori: 6,
      chicken_spicy: 0,
      isDecreaseOriginalChickenDisabled: false,
      isIncreaseOriginalChickenDisabled: false,
      isDecreaseSpicyChickenDisabled: false,
      isIncreaseSpicyChickenDisabled: false,   
    }

  }

  

  componentDidMount(){

    this.updateDisablingButton();
  }

  updateDisablingButton = () => {

    console.log('log', this.state.chicken_ori);

    // For Original
    if (this.state.chicken_ori <= 0) {
      this.setState({
        isDecreaseOriginalChickenDisabled: true,
      });
    } else {
      this.setState({
        isDecreaseOriginalChickenDisabled: false,
      });
    }

    if (this.state.chicken_ori >= this.state.chicken_total) {
      this.setState({
        isIncreaseOriginalChickenDisabled: true,
      });
    } else {
      this.setState({
        isIncreaseOriginalChickenDisabled: false,
      });
    }

    // For Spicy
    if (this.state.chicken_spicy <= 0) {
      this.setState({
        isDecreaseSpicyChickenDisabled: true,
      });
    } else {
      this.setState({
        isDecreaseSpicyChickenDisabled: false,
      });
    }

    if (this.state.chicken_spicy >= this.state.chicken_total) {
      this.setState({
        isIncreaseSpicyChickenDisabled: true,
      });
    } else {
      this.setState({
        isIncreaseSpicyChickenDisabled: false,
      });
    }

  }


  // Changes

  increaseOriginalChicken = () => {
    this.state.chicken_ori = this.state.chicken_ori + 1;
    this.state.chicken_spicy = this.state.chicken_spicy - 1;

    this.updateDisablingButton();

  }

  decreaseOriginalChicken = () => {
    this.state.chicken_ori = this.state.chicken_ori - 1;
    this.state.chicken_spicy = this.state.chicken_spicy + 1;

    this.updateDisablingButton();
  }

  increaseSpicyChicken = () => {
    this.state.chicken_spicy = this.state.chicken_spicy + 1;
    this.state.chicken_ori = this.state.chicken_ori - 1;
    this.updateDisablingButton();
  }

  decreaseSpicyChicken = () => {
    this.state.chicken_spicy = this.state.chicken_spicy - 1;
    this.state.chicken_ori = this.state.chicken_ori + 1;
    this.updateDisablingButton();
  }



  render() {

    return (
      <div className="container">
        

        <h3 style={{ textAlign: 'left', padding: 20 }}>Menu Item</h3>

        <div>
          <img style={{width:150}} alt="" src={chicken_meal} />
          <h1>2-PC COMBO</h1>

          <h1>Chicken</h1>
          <p>max: {this.state.chicken_total}</p>
          <h4>Chicken Original</h4>
          <button disabled={this.state.isDecreaseOriginalChickenDisabled} onClick={this.decreaseOriginalChicken} style={{ backgroundColor: 'red' }}>-</button>
          <span>{this.state.chicken_ori}</span>
          <button disabled={this.state.isIncreaseOriginalChickenDisabled} onClick={this.increaseOriginalChicken} style={{ backgroundColor: 'red' }} >+</button>

          <br />
          <br />

          <h4>Chicken Spicy</h4>
          <button disabled={this.state.isDecreaseSpicyChickenDisabled} onClick={this.decreaseSpicyChicken} style={{ backgroundColor: 'red' }}>-</button>
          <span>{this.state.chicken_spicy}</span>
          <button disabled={this.state.isIncreaseSpicyChickenDisabled} onClick={this.increaseSpicyChicken} style={{ backgroundColor: 'red' }}>+</button>

          <p>Input here: {this.state.chicken_total}</p>

          <h3>In your meal:</h3>

          <ul>
            {this.state.chicken_ori > 0 ? (<li>{this.state.chicken_ori} Original Recipe Chicken</li>) : null }
            {this.state.chicken_spicy > 0 ?<li>{this.state.chicken_spicy} Spicy Recipe Chicken</li> : null }

          </ul>

        </div>
      </div>
    )

  }
}



export default MenuItemDetailScreen;

