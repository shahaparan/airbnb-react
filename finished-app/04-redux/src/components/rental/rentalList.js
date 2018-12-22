import React, { Component } from "react";
import { connect } from "react-redux";
import { rentalActions } from "../../actions/index";
import RentalCard from "./rentalcard";
class rentalList extends Component {
  state = {
    rentalList: this.props.rentals
  };
  componentDidMount() {
    this.props.rentalActions();
  }
  renderRentals = () => {
    return (
      this.state.rentalList &&
      this.state.rentalList.map((value, index) => {
        return (
          <RentalCard
            columnNumber="col-md-3 col-xs-6"
            value={value}
            key={index}
          />
        );
      })
    );
  };

  render() {
    return (
      <section id="rentalListing">
        <div className="row">{this.renderRentals()}</div>
      </section>
    );
  }
}

const mapstate = state => ({
  rentals: state.rentals
});
export default connect(
  mapstate,
  { rentalActions }
)(rentalList);
