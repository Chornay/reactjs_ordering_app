import React, { Component } from 'react'


import kfc_promotion from '../images/kfc_promotion.jpg'
import chicken_meal from '../images/chicken_meal.jpeg'

import buger_meals from '../images/buger_meals.jpg'
import side_snack from '../images/side_snack.jpg'
import desert from '../images/desert.jpg'
import drink from '../images/drink.jpeg'

class MenuItemDetailScreen extends Component {

  state = {
    total_chicken: 3,
    chicken_ori: 4,
    chicken_spicy: 3,
    isDecreaseOriginalChickenDisabled : false,
    isIncreaseOriginalChickenDisabled : false,
    isDecreaseSpicyChickenDisabled : false,
    isIncreaseSpicyChickenDisabled : false,
  }

  updateDisablingButton = () => {

    console.log('log',this.state.chicken_ori);

    // For Original
    if (this.state.chicken_ori <= 0  ) {
      this.setState({
        isDecreaseOriginalChickenDisabled:true,
      });
    }else{
      this.setState({
        isDecreaseOriginalChickenDisabled:false,
      });
    }

    if (this.state.chicken_ori >= this.state.chicken_total   ) {
      this.setState({
        isIncreaseOriginalChickenDisabled:true,
      });
    }else{
      this.setState({
        isIncreaseOriginalChickenDisabled:false,
      });
    }

    // For Spicy
    if (this.state.chicken_spicy <= 0  ) {
      this.setState({
        isDecreaseSpicyChickenDisabled:true,
      });
    }else{
      this.setState({
        isDecreaseSpicyChickenDisabled:false,
      });
    }

    if (this.state.chicken_spicy >= this.state.chicken_total  ) {
      this.setState({
        isIncreaseSpicyChickenDisabled:true,
      });
    }else{
      this.setState({
        isIncreaseSpicyChickenDisabled:false,
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
      <div>
        <div className="row" style={{ padding: 20 }}>
          <div className="col" style={{ backgroundColor: 'white' }}>
            <button type="button" className="btn btn-secondary btn-block" style={{ backgroundColor: "red" }} color="secondary" size="lg">START MY ORDER</button>
          </div>
        </div>

        <h3 style={{ textAlign: 'left', padding: 20 }}>Menu Item</h3>
        
        <div>
          <img style={{ width: 150 }} src={chicken_meal} />
          <h1>2-PC COMBO</h1>
          <button style={{ backgroundColor: 'red' }} onClick={this.state.increment}>-</button>
          {this.state.chicken_ori}
          <button style={{ backgroundColor: 'red' }}>+</button>

        </div>
      </div>
    )

  }
}



export default MenuItemDetailScreen;

