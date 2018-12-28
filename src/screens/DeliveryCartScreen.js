import React, { Component } from 'react'
import FluidButton from '../components/FluidButton';
import FluidSecondaryButton from '../components/FluidSecondaryButton';

class DeliveryCartScreen extends Component {

  render() {
    return (

      <div className="container">
        <div style={{display:'flex', justifyContent:'space-between',paddingTop:8}}>
          <div>
            <span>Delivery in:</span>
            <br/>
            <span style={{fontWeight:'700'}}>2018-12-29 12:00 pm</span>
          </div>
          <div>
            <a href='/delivery/order-option' ><span style={{fontWeight:'900'}}>Change</span></a>
          </div>
        </div>

        <div style={{ width: '100%', backgroundColor: 'lightGray', height: 1, marginTop: 10 }} />   

        {this.renderTotal()}     

        <FluidButton onClick={()=>{this.props.history.push('/delivery/checkout')}} title="PROCEED TO PAYMENT" />

        <FluidSecondaryButton title="Add more Food"/>


        {/* Order items */}
        <div style={{backgroundColor:'white', padding:8}}>
          <span><strong>Spicy Gohujang Crunch 2-pc Combo</strong></span>
          <ul> 
            <li>2 Original Recipe Chicken</li>
            <li>1 Coeslaw (R)</li>
            <li>1 Whipped Potato</li>
            <li>1 Pepsi</li>
          </ul>

        </div>

        {this.renderTotal()}

        <FluidButton onClick={()=>{this.props.history.push('/delivery/checkout')}} title="PROCEED TO PAYMENT" />
      </div>
    );
  }

  renderTotal(){
    return (
      <div>
      {/* Total */}
      <div style={{ width: '100%', backgroundColor: 'lightGray', height: 1, marginBottom: 10 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{fontWeight:'900'}}>Total</span>
        <span className="big-price">RM<span style={{fontSize:24}}>16.90</span></span>
      </div>
      <div style={{ width: '100%', backgroundColor: 'lightGray', height: 1, marginTop: 10 }} />
      </div>
    )
  }
  
}

export default DeliveryCartScreen;
