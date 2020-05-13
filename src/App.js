import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import AppNavbar from "../src/components/layout/AppNavbar";
import Dashboard from "../src/components/layout/Dashboard";
import AddClient from "../src/components/clients/AddClient";
import ClientDetails from "../src/components/clients/ClientDetails";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppNavbar></AppNavbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard}></Route>
              <Route exact path="/client/add" component={AddClient}></Route>
              <Route exact path="/client/:id" component={ClientDetails}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
