import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/shared/header";
import RentalList from "./components/rental/rentalList";
import RentalDetails from "./components/rental/rentalDetails";
import "./App.css";
import { configureStore } from "./configureStore/store";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals" component={RentalList} />
              <Route exact path="/rentals/:id" component={RentalDetails} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
