import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';

import kfc_promotion from "../images/kfc_promotion.jpg";
import chicken_meal from "../images/chicken_meal.jpeg";
import buger_meals from "../images/buger_meals.jpg";
import side_snack from "../images/side_snack.jpg";
import desert from "../images/desert.jpg";
import drink from "../images/drink.jpeg";
import StartMyOrderButton from "../components/StartMyOrderButton";
// import AutoFitImage from 'react-image-autofit-frame';



class ForOneMenuScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Chicken Meals", slug: "chicken", image: chicken_meal },
        { name: "Burgers", slug: "burgers", image: buger_meals },
        { name: "Sides and Snacks", slug: "sides", image: side_snack },
        { name: "Deserts", slug: "deserts", image: desert },
        { name: "Drinks", slug: "drinks", image: drink }
      ]
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <StartMyOrderButton />

          {/* Header */}
          <div className="row" style={{ padding: 0 }}>
            <div className="col" style={{}}>
              <img
                onClick={()=>{this.props.increaseCounter()}}
                style={{ width: '100%' }}
                src={require('../images/spicy-gochujang-sst.jpg')}
                alt="Hojang"
              />

            </div>

          </div>

          {/* Title */}
          <h1 style={{ textAlign: "left", padding: 0, marginTop: 16 }}>MEALS FOR ONE</h1>

          {/* Contents */}
          <div className="row" style={{ padding: 8 }}>
            {this.renderMeals()}
          </div>

        </div>
      </div>
    );
  }

  renderMeals() {
    return this.state.data.map(meal => {
      return (
        <div className="col-6 item-meal" style={{ padding: 3}} key={meal.slug}>
          <Link to={"/menu/for-one/" + meal.slug}>
            <div className="card" style={{ borderWidth:0, borderRadius:0 }}>
              <div className="thumbnail" style={{height:200, overflow:'hidden'}}>
                <img
                  className=""
                  style={{ width: '100%', borderRadius: 0, border: 0 }}
                  src={meal.image}
                  alt="cap"
                />
              </div>
              <div className="card-body" style={{ height: 50, paddingLeft: 8}}>
                <p style={{ fontWeight: '800', fontSize:20 }}>
                  <span>{meal.name}</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  }
}

function mapsDispatchToProps(dispatch){
  return {
    increaseCounter: () => dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'})
  }
}

export default connect(null,mapsDispatchToProps)(ForOneMenuScreen);;
