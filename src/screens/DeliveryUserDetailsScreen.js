import React, { Component } from 'react'
import FluidButton from '../components/FluidButton';

class DeliveryUserDetailsScreen extends Component {
   render() {
       return (
           <div className="container">
              <form className="col-md-8 mx-auto" style={{paddingTop:8}}>

                <label>First Name</label>
                <input className="form-control" />

                <label>Last Name</label>
                <input className="form-control" />

                <label>Email</label>
                <input className="form-control" />

                <label>Phone Number</label>
                <input className="form-control" />

                <label>Delivery to</label>
                <input className="form-control" />


              </form>

              <div style={{height:20}}/>

              <FluidButton title="CONFIRM" style={{padding:20}}/>

              <div style={{height:20}}/>

           </div>
       );
   }
}


export default DeliveryUserDetailsScreen;
