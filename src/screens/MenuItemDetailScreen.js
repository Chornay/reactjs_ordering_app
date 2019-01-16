import React, { Component } from "react";


import chicken_meal from "../images/chicken_meal.png";

import FluidButton from "../components/FluidButton";

class MenuItemDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chicken_total: 2,
      chicken_ori: 2,
      chicken_spicy: 0,
      isDecreaseOriginalChickenDisabled: false,
      isIncreaseOriginalChickenDisabled: false,
      isDecreaseSpicyChickenDisabled: false,
      isIncreaseSpicyChickenDisabled: false,
      selected_type: 'food',
      drink_total:1,
      drink_1:1,
      drink_2:0,
      isDecreaseDrink1Disabled: false,
      isIncreaseDrink1Disabled: false,
      isDecreaseDrink2Disabled: false,
      isIncreaseDrink2Disabled: false,

    };

    // we will request the detail of them menu 
    // to the network 
    // with this slug this.props.match.params.slug;

  }

  componentDidMount() {
    this.updateDisablingButton();
  }

  updateDisablingButton = () => {
    console.log("log", this.state.chicken_ori);

    // For Original
    if (this.state.chicken_ori <= 0) {
      this.setState({
        isDecreaseOriginalChickenDisabled: true
      });
    } else {
      this.setState({
        isDecreaseOriginalChickenDisabled: false
      });
    }

    if (this.state.chicken_ori >= this.state.chicken_total) {
      this.setState({
        isIncreaseOriginalChickenDisabled: true
      });
    } else {
      this.setState({
        isIncreaseOriginalChickenDisabled: false
      });
    }

    // For Spicy
    if (this.state.chicken_spicy <= 0) {
      this.setState({
        isDecreaseSpicyChickenDisabled: true
      });
    } else {
      this.setState({
        isDecreaseSpicyChickenDisabled: false
      });
    }

    if (this.state.chicken_spicy >= this.state.chicken_total) {
      this.setState({
        isIncreaseSpicyChickenDisabled: true
      });
    } else {
      this.setState({
        isIncreaseSpicyChickenDisabled: false
      });
    }

    // For Drinks
    
    if (this.state.drink_1 <= 0) {
      this.setState({
        isDecreaseDrink1Disabled: true
      });
    } else {
      this.setState({
        isDecreaseDrink1Disabled: false
      });
    }

    if (this.state.drink_1 >= this.state.drink_total) {
      this.setState({
        isIncreaseDrink1Disabled: true
      });
    } else {
      this.setState({
        isIncreaseDrink1Disabled: false
      });
    }

    // For Spicy
    if (this.state.drink_2 <= 0) {
      this.setState({
        isDecreaseDrink2Disabled: true
      });
    } else {
      this.setState({
        isDecreaseDrink2Disabled: false
      });
    }

    if (this.state.drink_2 >= this.state.drink_total) {
      this.setState({
        isIncreaseDrink2Disabled: true
      });
    } else {
      this.setState({
        isIncreaseDrink2Disabled: false
      });
    }

  };

  // Changes

  increaseOriginalChicken = () => {
    this.state.chicken_ori = this.state.chicken_ori + 1;
    this.state.chicken_spicy = this.state.chicken_spicy - 1;

    this.updateDisablingButton();
  };

  decreaseOriginalChicken = () => {
    this.state.chicken_ori = this.state.chicken_ori - 1;
    this.state.chicken_spicy = this.state.chicken_spicy + 1;

    this.updateDisablingButton();
  };

  increaseSpicyChicken = () => {
    this.state.chicken_spicy = this.state.chicken_spicy + 1;
    this.state.chicken_ori = this.state.chicken_ori - 1;
    this.updateDisablingButton();
  };

  decreaseSpicyChicken = () => {
    this.state.chicken_spicy = this.state.chicken_spicy - 1;
    this.state.chicken_ori = this.state.chicken_ori + 1;
    this.updateDisablingButton();
  };

  // Drinks
  increaseDrink1 = () => {
    this.state.drink_1 = this.state.drink_1 + 1;
    this.state.drink_2 = this.state.drink_2 - 1;

    this.updateDisablingButton();
  };

  decreaseDrink1 = () => {
    this.state.drink_1 = this.state.drink_1 - 1;
    this.state.drink_2 = this.state.drink_2 + 1;

    this.updateDisablingButton();
  };

  increaseDrink2 = () => {
    this.state.drink_2 = this.state.drink_2 + 1;
    this.state.drink_1 = this.state.drink_1 - 1;
    this.updateDisablingButton();
  };

  decreaseDrink2 = () => {
    this.state.drink_2 = this.state.drink_2 - 1;
    this.state.drink_1 = this.state.drink_1 + 1;
    this.updateDisablingButton();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12" style={{}}>

            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <img className="img-fluid" style={{ minWidth: 300, marginBottom: 10 }} alt="" src={chicken_meal} />
            </div>

            <h1 style={{ fontSize: 20, fontWeight: '700' }}>2-PC COMBO Chicken</h1>

            {/* <p></p> */}

            <p>2 pieces of chicken, Spicy Honey Gochujang sauce, coleslay, whipped potato and drink.</p>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={"page-item " +  (this.state.selected_type === "food" ? "active" : "") } onClick={()=>{ this.setState({selected_type:'food'}) }} ><a className="page-link" >Food</a></li>
                <li className={"page-item " +  (this.state.selected_type === "drink" ? "active" : "") } onClick={()=>{ this.setState({selected_type:'drink'}) }} ><a className="page-link">Drink</a></li>
              </ul>
            </nav>

            {this.renderFoodOrDrink()}

            <h3>In your meal:</h3>

            <ul>
              {this.state.chicken_ori > 0 ? (
                <li>{this.state.chicken_ori} Original Recipe Chicken</li>
              ) : null}
              {this.state.chicken_spicy > 0 ? (
                <li>{this.state.chicken_spicy} Spicy Recipe Chicken</li>
              ) : null}
              <li>1 Coeslaw (R)</li>
              <li>1 Whipped Potato</li>
              
              {this.state.drink_1 > 0 ? (
                <li>{this.state.drink_1} Pepsi</li>
              ) : null}
              {this.state.drink_2 > 0 ? (
                <li>{this.state.drink_2} Mountain Dew</li>
              ) : null}

            </ul>

            {/* Total */}
            <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginBottom: 10 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total</span>
              <span>RM 16.90</span>
            </div>
            <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginTop: 10 }} />

            <FluidButton title="ADD TO ORDER" onClick={()=>{ this.props.history.push('/delivery/cart') }} />

          </div>
        </div>
      </div>
    );
  }

  renderFoodOrDrink(){

    if (this.state.selected_type === 'food'){
      return this.renderFood();
    }else if(this.state.selected_type === 'drink') {
      return this.renderDrink();
    }

  }

  renderFood(){
    return(
      <div>
            <p>Choose Your Chicken</p>

            <div style={{ backgroundColor: 'white', padding: 8, marginBottom: 8 }}>
              <div className="row">
                <div className="col-8">

                  {this.state.chicken_ori > 0 ? (
                  <span>In your meal </span>
                ) : null}

                  <h4>Chicken Original</h4>
                  <button type="button" class="btn btn-primary"
                    disabled={this.state.isDecreaseOriginalChickenDisabled}
                    onClick={this.decreaseOriginalChicken}
                    style={{ backgroundColor: "red" }}
                  >
                    -
                </button>
                  <span style={{ padding: 18 }}>{this.state.chicken_ori}</span>
                  <button
                    type="button" class="btn btn-primary"
                    disabled={this.state.isIncreaseOriginalChickenDisabled}
                    onClick={this.increaseOriginalChicken}
                    style={{ backgroundColor: "red" }}
                  >
                    +
                </button>
                </div>

                <div className="col-4">
                  <div className="media-right"  >
                    <img object className="itemSytle" src={require('../images/chicken-original.png')} alt="hi" style={{width:'100%'}} />
                  </div>
                </div>
              </div>

            </div>

            <div style={{ backgroundColor: 'white', padding: 8, marginBottom: 8 }}>
            <div className="row">
              <div className="col-8">
              {this.state.chicken_spicy > 0 ? (
                  <span>In your meal </span>
                ) : null}
              <h4>Chicken Spicy</h4>
              <button
                type="button" class="btn btn-primary"
                disabled={this.state.isDecreaseSpicyChickenDisabled}
                onClick={this.decreaseSpicyChicken}
                style={{ backgroundColor: "red" }}
              >
                -
              </button>
              <span style={{ padding: 18 }}>{this.state.chicken_spicy}</span>
              <button
                type="button" class="btn btn-primary"
                disabled={this.state.isIncreaseSpicyChickenDisabled}
                onClick={this.increaseSpicyChicken}
                style={{ backgroundColor: "red" }}
              >
                +
              </button>
              </div>

              <div className="col-4">
                  <div className="media-right" >
                    <img object className="itemSytle" src={require('../images/chicken-hot-spicy.png')} style={{width:'100%'}} alt="item" />
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
  }


  renderDrink(){
    return(
      <div>

        <p>Choose your drink:</p>


            <div style={{ backgroundColor: 'white', padding: 8, marginBottom: 8 }}>
              <div className="row">
                <div className="col-8">
                  <h4>Pepsi </h4>
                  <button type="button" class="btn btn-primary"
                    disabled={this.state.isDecreaseDrink1Disabled}
                    onClick={this.decreaseDrink1}
                    style={{ backgroundColor: "red" }}
                  >
                    -
                </button>
                  <span style={{ padding: 18 }}>{this.state.drink_1}</span>
                  <button
                    type="button" class="btn btn-primary"
                    disabled={this.state.isIncreaseDrink1Disabled}
                    onClick={this.increaseDrink1}
                    style={{ backgroundColor: "red" }}
                  >
                    +
                </button>
                </div>

                <div className="col-4">
                  <div className="media" right >
                    <img object className="itemSytle" src={require('../images/delivery_Pepsi(R).png')} style={{width:'100%'}} alt="drink" />
                  </div>
                </div>
              </div>

            </div>

            <div style={{ backgroundColor: 'white', padding: 8, marginBottom: 8 }}>
            <div className="row">
              <div className="col-8">
              <h4>Montain Dew</h4>
              <button
                type="button" class="btn btn-primary"
                disabled={this.state.isDecreaseDrink2Disabled}
                onClick={this.decreaseDrink2}
                style={{ backgroundColor: "red" }}
              >
                -
              </button>
              <span style={{ padding: 18 }}>{this.state.drink_2}</span>
              <button
                type="button" class="btn btn-primary"
                disabled={this.state.isIncreaseDrink2Disabled}
                onClick={this.increaseDrink2}
                style={{ backgroundColor: "red" }}
              >
                +
              </button>
              </div>

              <div className="col-4">
                  <div className="media" right >
                    <img object className="itemSytle" src={require('../images/delivery_Pepsi(R).png')} alt="pepsi" style={{width:'100%'}} />
                  </div>
                </div>
              </div>
            </div>
      </div>
    )
  }

}

export default MenuItemDetailScreen;
