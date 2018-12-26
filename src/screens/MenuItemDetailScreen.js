import React, { Component } from "react";

import kfc_promotion from "../images/kfc_promotion.jpg";
import chicken_meal from "../images/chicken_meal.jpeg";

import buger_meals from "../images/buger_meals.jpg";
import side_snack from "../images/side_snack.jpg";
import desert from "../images/desert.jpg";
import drink from "../images/drink.jpeg";
import StartMyOrderButton from "../components/StartMyOrderButton";
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
      isIncreaseSpicyChickenDisabled: false
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
                <li className="page-item active"><a className="page-link" href="#">Food</a></li>
                <li className="page-item"><a className="page-link" href="#">Drink</a></li>
              </ul>
            </nav>

            <h1 style={{ fontSize: 18, fontWeight: '700' }}>Chicken Meal</h1>

            <p>Choose Your Chicken</p>

            <div style={{ backgroundColor: 'white', padding: 8, marginBottom: 8 }}>
              <div className="row">
                <div className="col-8">
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
                  <div className="media" right >
                    <img object className="itemSytle" src={require('../images/chicken-original.png')} style={{width:'100%'}} />
                  </div>
                </div>
              </div>

            </div>

            <div style={{ backgroundColor: 'white', padding: 8, marginBottom: 8 }}>
            <div className="row">
              <div className="col-8">
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
                  <div className="media" right >
                    <img object className="itemSytle" src={require('../images/chicken-hot-spicy.png')} style={{width:'100%'}} />
                  </div>
                </div>
              </div>
            </div>

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
              <li>1 Pepsi Black</li>

            </ul>

            {/* Total */}
            <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginBottom: 10 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Total</span>
              <span>RM 16.90</span>
            </div>
            <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginTop: 10 }} />

            <FluidButton title="ADD TO ORDER" />

          </div>
        </div>
      </div>
    );
  }
}

export default MenuItemDetailScreen;
