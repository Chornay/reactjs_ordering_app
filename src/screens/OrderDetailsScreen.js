import React, { Component } from 'react'
import FluidButton from '../components/FluidButton';
import FluidSecondaryButton from '../components/FluidSecondaryButton';

class OrderDetailsScreen extends Component {

  render() {
    return (

      <div className="container">

        <span>Delivery in:</span>
        <br/>
        <span style={{fontWeight:'700'}}>2018-12-29 12:00 pm</span>

        <div style={{ width: '100%', backgroundColor: 'lightGray', height: 1, marginTop: 10 }} />   

        {/* Order items */}
        <div>
          <span><strong>Spicy Gohujang Crunch 2-pc Combo</strong></span>
          <ul> 
            <li>Helo</li>
            <li>Helo</li>
            <li>Helo</li>
            <li>Helo</li>
          </ul>

        </div>

        {this.renderTotal()}     

        <FluidButton onClick={()=>{this.props.history.push('/delivery/checkout')}} title="PROCEED TO PAYMENT" />

        <FluidSecondaryButton title="Add more Food"/>

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

export default OrderDetailsScreen;
