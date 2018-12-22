import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reduxThunk from "redux-thunk";
import rootReducer from "../reducers/index";

export const configureStore = preloadState => {
  const middlewares = [reduxThunk];
  const middlewarEnhancer = applyMiddleware(...middlewares);
  const StoreEnhancer = [middlewarEnhancer];
  const composeEnhancer = composeWithDevTools(...StoreEnhancer);
  const store = createStore(rootReducer, preloadState, composeEnhancer);

  return store;
};
