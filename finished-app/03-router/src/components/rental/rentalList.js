import React, { Component } from "react";
import RentalCard from "./rentalcard";
const rentals = [
  {
    id: 1,
    title: "Central Apartment",
    city: "New York",
    street: "Times Sqaure",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2017"
  },
  {
    id: 2,
    title: "Central Apartment 2",
    city: "San Francisco",
    street: "Main street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 12,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: 3,
    title: "Central Apartment 3",
    city: "Bratislava",
    street: "Hlavna",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice apartment",
    dailyRate: 334,
    shared: true,
    createdAt: "24/12/2017"
  },
  {
    id: 4,
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 33,
    shared: true,
    createdAt: "24/12/2017"
  }
];
class rentalList extends Component {
  state = {
    rentalList: rentals
  };

  renderRentals = () => {
    return this.state.rentalList.map((value, index) => {
      return (
        <RentalCard
          columnNumber="col-md-3 col-xs-6"
          value={value}
          key={index}
        />
      );
    });
  };

  render() {
    return (
      <section id="rentalListing">
        <div className="row">{this.renderRentals()}</div>
      </section>
    );
  }
}

export default rentalList;
