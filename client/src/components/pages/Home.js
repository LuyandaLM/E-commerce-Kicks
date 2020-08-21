import React, { useContext, useEffect } from "react";
import SneakerCards from "../sneakers/SneakerCards";
import AuthContext from "../../context/auth/authContext";
import SneakerCarousel from "../sneakers/SneakerCarousel";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container">
      <div>
        <SneakerCarousel />
        <SneakerCards />
      </div>
    </div>
  );
};

export default Home;
