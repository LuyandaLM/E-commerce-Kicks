import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import SneakerContext from "../../context/sneaker/sneakerContext";

const SneakerCards = () => {
  const sneakerContext = useContext(SneakerContext);

  const {
    getSneaker,
    addSneaker,
    updateSneaker,
    deleteSneaker,
    current,
    clearCurrent,
    setCurrent,
  } = sneakerContext;

  const onDelete = () => {
    deleteSneaker(_id);
    clearCurrent();
  };

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
  }, [getSneaker, sneakerContext, current]);

  const [sneaker, setSneaker] = useState({
    make: "",
    brand: "",
    price: "",
    type: "exclusive",
    size: "",
  });

  const { _id, make, brand, price, type, size } = sneaker;

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
    <div className="container">
      <div className="row">
        {/* CARD 1 */}
        <div className="col">
          <button
            className="card bg-dark"
            data-toggle="modal"
            data-target="#myModal3"
          >
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a73bc3ac-c29c-4932-89f4-90456cc4d831/air-force-1-07-craft-shoe-5zFRLc.jpg"
                  alt="Sneakers"
                />
                <h2> Air Force 1</h2>
                <h6>YOYO</h6>
                <h6>YOYO</h6>
                <h6>YOYO</h6>
              </div>
            </div>
          </button>
          <p>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setCurrent(sneaker)}
            >
              Customize
            </button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Delete
            </button>
          </p>
        </div>
        {/* Modal */}
        <div id="myModal3" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Profile Details</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <h2 className="text-primary">Sneakers</h2>
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
                      value={current ? "Update Sneaker" : "Add Sneaker"}
                      className="btn btn-block"
                    />
                  </div>
                  {current && (
                    <div>
                      <button
                        className="btn btn-dark btn-block"
                        onClick={clearAll}
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="col">
          <button
            className="card bg-dark"
            data-toggle="modal"
            data-target="#myModal4"
          >
            <div className="profile-card text-center">
              <div className="profile-info">
                <img
                  className="profile-pic"
                  style={{ width: "50%", height: "50%" }}
                  src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a73bc3ac-c29c-4932-89f4-90456cc4d831/air-force-1-07-craft-shoe-5zFRLc.jpg"
                  alt="Sneakers"
                />
                <h2> Air Force 1</h2>
                <h6>YOYO</h6>
                <h6>YOYO</h6>
                <h6>YOYO</h6>
              </div>
            </div>
          </button>
          <p>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setCurrent(sneaker)}
            >
              Customize
            </button>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>
              Delete
            </button>
          </p>
        </div>

        {/* Modal */}
        <div id="myModal4" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Profile Details</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={onSubmit}>
                  <h2 className="text-primary">Sneakers</h2>
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
                      value={current ? "Update Sneaker" : "Add Sneaker"}
                      className="btn btn-block"
                    />
                  </div>
                  {current && (
                    <div>
                      <button
                        className="btn btn-dark btn-block"
                        onClick={clearAll}
                      >
                        Clear
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="row">
          <div className="col">
            <button
              className="card bg-dark"
              data-toggle="modal"
              data-target="#myModal5"
            >
              <div className="profile-card text-center">
                <div className="profile-info">
                  <img
                    className="profile-pic"
                    style={{ width: "50%", height: "50%" }}
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a73bc3ac-c29c-4932-89f4-90456cc4d831/air-force-1-07-craft-shoe-5zFRLc.jpg"
                    alt="Sneakers"
                  />
                  <h2> Air Force 1</h2>
                  <h6>YOYO</h6>
                  <h6>YOYO</h6>
                  <h6>YOYO</h6>
                </div>
              </div>
            </button>
            <p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setCurrent(sneaker)}
              >
                Customize
              </button>
              <button className="btn btn-danger btn-sm" onClick={onDelete}>
                Delete
              </button>
            </p>
            {/* Modal */}
            <div id="myModal5" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Profile Details</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={onSubmit}>
                      <h2 className="text-primary">Sneakers</h2>
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
                          value={current ? "Update Sneaker" : "Add Sneaker"}
                          className="btn btn-block"
                        />
                      </div>
                      {current && (
                        <div>
                          <button
                            className="btn btn-dark btn-block"
                            onClick={clearAll}
                          >
                            Clear
                          </button>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col">
            <button
              className="card bg-dark"
              data-toggle="modal"
              data-target="#myModal6"
            >
              <div className="profile-card text-center">
                <div className="profile-info">
                  <img
                    className="profile-pic"
                    style={{ width: "50%", height: "50%" }}
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a73bc3ac-c29c-4932-89f4-90456cc4d831/air-force-1-07-craft-shoe-5zFRLc.jpg"
                    alt="Sneakers"
                  />
                  <h2> Air Force 1</h2>
                  <h6>YOYO</h6>
                  <h6>YOYO</h6>
                  <h6>YOYO</h6>
                </div>
              </div>
            </button>
            <p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setCurrent(sneaker)}
              >
                Customize
              </button>
              <button className="btn btn-danger btn-sm" onClick={onDelete}>
                Delete
              </button>
            </p>
          </div>
          {/* Modal */}
          <div id="myModal6" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Profile Details</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <h2 className="text-primary">Sneakers</h2>
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
                        value={current ? "Update Sneaker" : "Add Sneaker"}
                        className="btn btn-block"
                      />
                    </div>
                    {current && (
                      <div>
                        <button
                          className="btn btn-dark btn-block"
                          onClick={clearAll}
                        >
                          Clear
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SneakerCards.propTypes = {
  sneaker: PropTypes.object.isRequired,
};

export default SneakerCards;
