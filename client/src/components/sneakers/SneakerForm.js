import React, { useState, useContext, useEffect } from "react";
import SneakerContext from "../../context/sneaker/sneakerContext";

const SneakerForm = () => {
  const sneakerContext = useContext(SneakerContext);

  const { addSneaker, updateSneaker, current, clearCurrent } = sneakerContext;

  useEffect(() => {
    if (current !== null) {
      setSneaker(current);
    } else {
      setSneaker({
        make: "",
        brand: "",
        price: "",
        type: "exclusive",
        size: "",
      });
    }
  }, [sneakerContext, current]);

  const [sneaker, setSneaker] = useState({
    make: "",
    brand: "",
    price: "",
    type: "exclusive",
    size: "",
  });

  const { make, brand, price, type, size } = sneaker;

  const onChange = (e) =>
    setSneaker({ ...sneaker, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addSneaker(sneaker);
    } else {
      updateSneaker(sneaker);
    }
    clearAll();
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <div className="card bg-dark">
      <form onSubmit={onSubmit}>
        <h2 className="text-warning">
          {current ? "Customize Sneaker" : "Add Sneaker to Cart"}
        </h2>
        <input
          type="text"
          placeholder="Make"
          name="make"
          value={make}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          value={brand}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={price}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Size"
          name="size"
          value={size}
          onChange={onChange}
        />
        {/* <!-- Switch --> */}
        <div className="switch">
          <label>
            Available
            <input type="checkbox" name="type" />
            <span className="lever"></span>
          </label>
        </div>
        <h5>Sneakerton</h5>
        <input
          type="radio"
          name="type"
          value="exclusive"
          checked={type === "exclusive"}
          onChange={onChange}
        />{" "}
        Exclusive{" "}
        <input
          type="radio"
          name="type"
          value="standard"
          checked={type === "standard"}
          onChange={onChange}
        />{" "}
        Standard{" "}
        <div>
          <input
            type="submit"
            value={current ? "Customize Sneaker" : "Add Sneaker to Cart"}
            className="btn btn-block"
          />
        </div>
        {current && (
          <div>
            <button className="btn btn-dark btn-block" onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SneakerForm;
