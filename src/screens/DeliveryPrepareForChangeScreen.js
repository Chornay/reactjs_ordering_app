import React, { Component } from 'react'

class DeliveryPrepareForChangeScreen extends Component {
   render() {
       return (
           <div className="container">
           <div style={{display:'flex',flexDirection:'column'}}>
               <h1>Prepare For Change</h1>
               <a className="btn btn-primary" href="/delivery/order-success">
               RM 50</a>
               <button className="btn btn-primary">
               RM 100</button>
               <button className="btn btn-primary">
               No Change Needed</button>
           </div>
           </div>
       );
   }
}


export default DeliveryPrepareForChangeScreen;
