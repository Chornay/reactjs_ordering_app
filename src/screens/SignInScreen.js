import React, { Component } from "react";
import FluidSecondaryButton from '../components/FluidSecondaryButton';
import FluidButton from '../components/FluidButton';




class SignInScreen extends Component {
  render() {
    return (
      <div className="container" style={{backgroundColor:'white'}}>
        <div style={{display:'flex', fontWeight:'bold', letterSpacing:'-1px', fontSize:'25px', justifyContent:'space-between',paddingTop:'8px'}}>      
           <h3 >SIGN IN WITH EXISTING ACCOUNT</h3>
        </div>
        <div>
          <span>Track your orders and earn rewards when you purchase your finger lickin' good meals!</span>
        </div>
          <FluidSecondaryButton title="Email"
          />
          <FluidSecondaryButton
            title="Password"
          />
        <div style={{paddingTop:'15px',fontWeight:'bold'}}>
          <span>Forgotten your password?</span>
        </div>
        <div style={{paddingTop:'25px'}}>
        <FluidButton title="SIGN IN"
        />
        </div>
        <span style={{alignItems:'center'}}>OR</span>
        <FluidButton title="SIGN IN WITH FACEBOOK"/>
        <div style={{display:'flex', fontWeight:'bold', letterSpacing:'-1px', fontSize:'25px', justifyContent:'space-between',paddingTop:25}}>
          <h3>CREATE NEW ACCOUNT</h3>
        </div>
          
          <span>Speed up the ordering process and enjoy
          irresistible offers when you sign-up as a member!
          </span>
          <div style={{paddingTop:'15px'}}>
            <FluidSecondaryButton
            title="Create New Account"
          />
          </div>
  
        <div style={{paddingTop:'15px'}}>
           <FluidSecondaryButton
            title="Cancel"
           />
       </div>

        


      </div>
    );
  }
}

export default SignInScreen;
