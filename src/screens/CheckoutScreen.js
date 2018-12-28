import React, { Component } from 'react'

class CheckoutScreen extends Component {
   render() {
       return (
           <div className="container">
               <h1>CHECKOUT</h1>

               <div style={{backgroundColor:'white', padding:8}}>
                  <h2>YOUR DETAILS</h2>
                  <a className="btn btn-primary" style={{fontWeight:'900',color:'white'}} href='/delivery/user-detail'>Complete your details</a>
               </div>

               <div style={{height:10}}/>

               <div style={{backgroundColor:'white', padding:8}}>
                  <h2>PAYMENT METHOD</h2>
                  <a className="btn btn-primary" style={{fontWeight:'900',marginRight:8}} href="/delivery/cash-change">Cash</a>
                  
                  <button className="btn btn-primary" style={{fontWeight:'900'}}>Debit/Credit Card</button>
               </div>

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

                <div>

                {/* Total */}
                <div style={{ width: '100%', backgroundColor: 'lightGray', height: 1, marginBottom: 10 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{fontWeight:'900'}}>Total</span>
                    <span className="big-price">RM<span style={{fontSize:24}}>16.90</span></span>
                </div>
                <div style={{ width: '100%', backgroundColor: 'lightGray', height: 1, marginTop: 10 }} />
                </div>

           </div>
       );
   }
}


export default CheckoutScreen;
