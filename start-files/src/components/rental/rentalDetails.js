import React, { Component } from "react";

class rentalDetails extends Component {
  render() {
    return <div>{this.props.match.params.id}</div>;
  }
}
export default rentalDetails;
