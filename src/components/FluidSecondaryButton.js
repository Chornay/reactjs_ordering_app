import React, { Component } from 'react'

class FluidSecondaryButton extends Component {
   render() {
       return (
          <div className="row" style={{ paddingTop: 8, paddingBottom: 8 }}>
          <div className="col">
            <button onClick={this.props.onClick} type="button" className="btn btn-secondary btn-block" style={{ backgroundColor: "transparent", color:'black',fontWeight:'900' }} color="black" size="lg">{this.props.title}</button>
          </div>
        </div>
       );
   }
}


export default FluidSecondaryButton;
