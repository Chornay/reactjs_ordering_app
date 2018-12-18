import React, { Component } from 'react'

class StartMyOrderButton extends Component {
  render() {
    return (
      <div className="row" style={{ padding: 20 }}>
        <div className="col">
          <button type="button" className="btn btn-secondary btn-block" style={{ backgroundColor: "red" }} color="secondary" size="lg">START MY ORDER</button>
        </div>
      </div>
    );
  }
}


export default StartMyOrderButton;
