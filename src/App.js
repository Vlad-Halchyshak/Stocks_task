import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Stocks } from "./components/stocks";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Stocks />
      </Provider>
    </div>
  );
}

export default App;
