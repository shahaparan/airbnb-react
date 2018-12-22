import React from "react";
import { Link } from "react-router-dom";
const rentalCard = props => {
  const rentals = props.value;
  console.log(rentals);
  return (
    <div className={props.columnNumber}>
      <Link to={`/rentals/${rentals.id}`} className="card bwm-card">
        <img className="card-img-top" src={rentals.image} alt="" />
        <div className="card-block">
          <h6 className="card-subtitle">
            {rentals.shared ? "shared" : "whole"} {rentals.category}&#183;
            {rentals.city}
          </h6>
          <h4 className="card-title">{rentals.title}</h4>
          <p className="card-text">
            {rentals.dailyRate} per Night &#183; Free Cancelation
          </p>
        </div>
      </Link>
    </div>
  );
};

export default rentalCard;
