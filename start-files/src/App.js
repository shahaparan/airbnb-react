import React, { Component } from "react";
import Header from "./components/shared/header";
import RentalList from "./components/rental/rentalList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <RentalList />
        </div>
      </div>
    );
  }
}

export default App;
