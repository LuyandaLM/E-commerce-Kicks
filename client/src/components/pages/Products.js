import React, { useContext, useEffect } from "react";
import Sneakers from "../sneakers/Sneakers";
import SneakerForm from "../sneakers/SneakerForm";
import SneakerFilter from "../sneakers/SneakerFilter";
import AuthContext from "../../context/auth/authContext";

const Products = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div>
        <h2 className="animate__animated animate__bounce">CART</h2>
        <Sneakers />
        <SneakerFilter />
      </div>
      <div>
        <h2 className="animate__animated animate__bounce">
          CART CUSTOMIZATION
        </h2>
        <SneakerForm />
      </div>
    </div>
  );
};

export default Products;
