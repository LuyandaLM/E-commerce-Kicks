import React, { useContext } from "react";
import PropTypes from "prop-types";
import SneakerContext from "../../context/sneaker/sneakerContext";

const SneakerItem = ({ sneaker }) => {
  const sneakerContext = useContext(SneakerContext);
  const { deleteSneaker, setCurrent, clearCurrent } = sneakerContext;

  const { _id, make, brand, price, type, size } = sneaker;

  const onDelete = () => {
    deleteSneaker(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-dark">
      <h3 className="text-left">
        {make}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge" +
            (type === "exclusive"
              ? "badge badge-danger"
              : "badge badge-warning")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {brand && (
          <li>
            <i className="far fa-copyright"></i> {brand}
          </li>
        )}
        {price && (
          <li>
            <i className="fas fa-money-bill-wave"></i> {price}
          </li>
        )}
        {size && (
          <li>
            <i className="fas fa-shoe-prints"></i> {size}
          </li>
        )}
      </ul>
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
  );
};

SneakerItem.propTypes = {
  sneaker: PropTypes.object.isRequired,
};

export default SneakerItem;
