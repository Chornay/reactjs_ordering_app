import React, { Component } from 'react'
import FluidButton from '../components/FluidButton';

class OrderDetailsScreen extends Component {

  render() {
    return (

      <div className="container">

        <p>Delivery in:</p>

        <strong>2018-12-29 12:00 pm</strong>

        <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginTop: 10 }} />        

        <FluidButton title="PROCEED TO PAYMENT" />

        {/* Total */}
        <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginBottom: 10 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Total</span>
          <span>RM 16.90</span>
        </div>
        <div style={{ width: '100%', backgroundColor: 'black', height: 1, marginTop: 10 }} />

        <FluidButton title="PROCEED TO PAYMENT" />
      </div>
    );
  }
}

export default OrderDetailsScreen;
