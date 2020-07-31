import React from "react";
import { Footer } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <div className="footer-card">
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Kickin' It</h5>
              <p class="grey-text text-lighten-4">
                Buy your latest and exclusive sneakers here today!!! All
                sneakerheads accomodated
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Navigate</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footerr;
