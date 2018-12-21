import React, { Component } from 'react'

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
                <div className="card-body">
                  <img top style={{ width: 150 }} src={require('../images/chicken_meal.jpeg')} />
                  2-PC COMBO
               </div>
              </div>
              </a>
          </div>
        </div>

      </div>
    );
  }
}


export default MenuListScreen;

