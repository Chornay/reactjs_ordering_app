import React, { Component } from "react"
import Modal from "react-responsive-modal"

class DeliveryPrepareForChangeScreen extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Prepare For Change</h1>
          <a className="btn btn-primary" href="/delivery/order-success">
            RM 50
          </a>
          <br />
          <button
              onClick={this.onOpenModal}
            className="btn btn-primary"
            sytle={{ backgroundColor: "red" }}
          >
            RM 100
          </button>
          <br />
          <button className="btn btn-primary">No Change Needed</button>
        </div>
       
        <Modal open={this.state.open} onClose={this.onCloseModal}  center>
            <div styles={{width:300,height:500}} >
                <h2>Simple centered modal</h2>

                <p>o
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
            </div>

        </Modal>
      </div>
    );
  }
}

export default DeliveryPrepareForChangeScreen;
