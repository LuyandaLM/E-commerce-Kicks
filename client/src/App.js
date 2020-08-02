import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import ContactUs from "./components/pages/ContactUs";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import SneakerState from "./context/sneaker/SneakerState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import Products from "./components/pages/Products";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <SneakerState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar fixed="top" />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/products" component={Products} />
                  <Route exact path="/contact" component={ContactUs} />
                </Switch>
              </div>
              <Footer fixed="bottom" />
            </Fragment>
          </Router>
        </AlertState>
      </SneakerState>
    </AuthState>
  );
};

export default App;
