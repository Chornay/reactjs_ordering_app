import React, { Component } from 'react'

import StartMyOrderButton from '../components/StartMyOrderButton';

class MenuListScreen extends Component {
  render() {
    return (
      <div>

        <div className="container">
        <StartMyOrderButton />

        <h2>CHICKEN MEALS</h2>

        
        <div className="row">
          <div className="col-12">
            <a href="/menu/item/2-pc-combo">
              <div className="card" >
                <div className="card-body">
                  2-PC COMBO
                  <img top style={{ width: 150, alignItems:"left", }} src={require('../images/deal_spicy_gochujang_a.png')} alt=""/>
               </div>
              </div>
              </a>
          </div>
        </div>
        </div>

      </div>
    );
  }
}


export default MenuListScreen;

