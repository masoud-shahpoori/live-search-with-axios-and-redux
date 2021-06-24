// Provider, connect - react-redux

import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Search from "./Pages/Search";



import searchReducer from "./Reducer/searchReducer";
import { getProducts } from "./Action/actions";
const middleware = [thunk];
const store = createStore(
  combineReducers({
    searchState: searchReducer
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

export default App;
