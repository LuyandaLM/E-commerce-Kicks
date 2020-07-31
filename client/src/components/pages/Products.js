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
        <SneakerFilter />
        <Sneakers />
      </div>
      <div>
        <SneakerForm />
      </div>
    </div>
  );
};

export default Products;
