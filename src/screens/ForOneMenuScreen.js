import React, { Component } from "react";
import { Link } from "react-router-dom";

import kfc_promotion from "../images/kfc_promotion.jpg";
import chicken_meal from "../images/chicken_meal.jpeg";
import buger_meals from "../images/buger_meals.jpg";
import side_snack from "../images/side_snack.jpg";
import desert from "../images/desert.jpg";
import drink from "../images/drink.jpeg";
import StartMyOrderButton from "../components/StartMyOrderButton";
import AutoFitImage from 'react-image-autofit-frame';


const allowedSrcWidths = [ 200, 300, 400, 500 ];

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
          <div className="row" style={{ padding:0}}>
            <div className="col" style={{}}>              
              <img                
                style={{ width: '100%'}}
                src={require('../images/spicy-gochujang-sst.jpg')}
                alt="Hojang"
              />             
              
            </div>
            
          </div>

          {/* Title */}
          <h3 style={{ textAlign: "left", padding:0, marginTop: 16 }}>MEALS FOR ONE</h3>

          {/* Contents */}
          <div className="row" style={{padding:8}}>
            {this.renderMeals()}
          </div>
        
        </div>
      </div>
    );
  }

  renderMeals() {
    return this.state.data.map(meal => {
      return (
        <div className="col-6 item-meal" style={{ padding: 3 }}>
          <Link to={"/menu/for-one/" + meal.slug}>
            <div className="card">
              <img
                className="card-img-top img-thumbnail img-fluid"
                style={{ height: 150, borderRadius: 0, border: 0 }}
                src={meal.image}
                alt="cap"
              />
              <div className="card-body" style={{ height: 50, paddingLeft: 8 }}>
                <p style={{ fontWeight: "500" }}>
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

export default ForOneMenuScreen;
