import { combineReducers } from "redux";
import RentalReducer from "./rentals";
const rootReducer = combineReducers({
  rentals: RentalReducer
});

export default rootReducer;
