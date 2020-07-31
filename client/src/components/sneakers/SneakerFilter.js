import React, { useContext, useRef, useEffect } from "react";
import SneakerContext from "../../context/sneaker/sneakerContext";

const SneakerFilter = () => {
  const sneakerContext = useContext(SneakerContext);

  const text = useRef("");

  const { filterSneakers, clearFilter, filtered } = sneakerContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterSneakers(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Search Sneakers..."
        onChange={onChange}
      ></input>
    </form>
  );
};

export default SneakerFilter;
