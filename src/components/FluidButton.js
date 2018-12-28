import React, { Component } from 'react'

class FluidButton extends Component {
  render() {
    return (
      <div className="row" style={{ paddingTop: 8, paddingBottom: 8 }}>
        <div className="col">
          <button onClick={this.props.onClick} type="button" className="btn btn-secondary btn-block" style={{ backgroundColor: "red" }} color="secondary" size="lg"><span style={{fontWeight:400,fontFamily:'Oswald'}}>{this.props.title}</span></button>
        </div>
      </div>
    );
  }
}


export default FluidButton;
