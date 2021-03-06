import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Header from "./components/shared/header";
import RentalList from "./components/rental/rentalList";
import RentalDetails from "./components/rental/rentalDetails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container">
            <Route exact path="/" component={RentalList} />
            <Route exact path="/rentals/:id" component={RentalDetails} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
