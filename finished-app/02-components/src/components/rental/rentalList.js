import React, { Component } from "react";
import RentalCard from "./rentalcard";
class rentalList extends Component {
  state = {
    rentals: ["1", "2", "3"]
  };

  renderRentals = () => {
    return this.state.rentals.map((value, index) => {
      return <RentalCard value={value} key={index} />;
    });
  };

  addRental = () => {
    const rentals = this.state.rentals;
    rentals.push(1);
    this.setState({
      rentals
    });
  };

  render() {
    return (
      <section id="rentalListing">
        <div className="row">{this.renderRentals()}</div>
        <button onClick={this.addRental}>Add product</button>
      </section>
    );
  }
}

export default rentalList;
