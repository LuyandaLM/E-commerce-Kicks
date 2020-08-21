import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import SneakerContext from "../../context/sneaker/sneakerContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const sneakerContext = useContext(SneakerContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearSneakers } = sneakerContext;

  const onLogout = () => {
    logout();
    clearSneakers();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">My Cart</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );
  return (
    <div className="navbar">
      <h1>
        {title}{" "}
        <img
          className={icon}
          src="https://cf.shopee.ph/file/542912e5502dc75ba2db31bd0c43c133"
          style={{ width: "70px", height: "70px" }}
          alt="navbar pic"
        />{" "}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Kickin' it",
  icon: "fas fa-shoe-prints",
};

export default Navbar;
