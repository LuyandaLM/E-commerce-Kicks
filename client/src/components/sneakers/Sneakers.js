import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SneakerItem from "./SneakerItem";
import Spinner from "../layout/Spinner";
import SneakerContext from "../../context/sneaker/sneakerContext";

const Sneakers = () => {
  const sneakerContext = useContext(SneakerContext);

  const { sneakers, filtered, getSneakers, loading } = sneakerContext;

  useEffect(() => {
    getSneakers();
    // eslint-disable-next-line
  }, []);

  if (sneakers !== null && sneakers.length === 0 && !loading) {
    return <h4> Please add a sneaker</h4>;
  }

  return (
    <Fragment>
      {(sneakers !== null) & !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((sneaker) => (
                <CSSTransition
                  key={sneaker._id}
                  timeout={500}
                  classNames="item"
                >
                  <SneakerItem sneaker={sneaker} />
                </CSSTransition>
              ))
            : sneakers.map((sneaker) => (
                <CSSTransition
                  key={sneaker._id}
                  timeout={500}
                  classNames="item"
                >
                  <SneakerItem sneaker={sneaker} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
export default Sneakers;
