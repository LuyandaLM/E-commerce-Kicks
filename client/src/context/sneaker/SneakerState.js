import React, { useReducer } from "react";
import axios from "axios";
import SneakerContext from "./sneakerContext";
import sneakerReducer from "./sneakerReducer";
import {
  GET_SNEAKERS,
  ADD_SNEAKER,
  DELETE_SNEAKER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SNEAKER,
  FILTER_SNEAKERS,
  CLEAR_SNEAKERS,
  CLEAR_FILTER,
  SNEAKER_ERROR,
} from "../types";

const SneakerState = (props) => {
  const initialState = {
    sneakers: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(sneakerReducer, initialState);

  // Get Sneakers
  const getSneakers = async () => {
    try {
      const res = await axios.get("/api/sneakers");

      dispatch({
        type: GET_SNEAKERS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: SNEAKER_ERROR, payload: err.response.msg });
    }
  };

  // Add Sneaker
  const addSneaker = async (sneaker) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/sneakers", sneaker, config);

      dispatch({
        type: ADD_SNEAKER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: SNEAKER_ERROR, payload: err.response.msg });
    }
  };

  // Delete Sneaker
  const deleteSneaker = async (id) => {
    try {
      await axios.delete(`/api/sneakers/${id}`);

      dispatch({ type: DELETE_SNEAKER, payload: id });
    } catch (err) {
      dispatch({ type: SNEAKER_ERROR, payload: err.response.msg });
    }
  };

  // Update Sneaker
  const updateSneaker = async (sneaker) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/sneakers/${sneaker._id}`,
        sneaker,
        config
      );

      dispatch({ type: UPDATE_SNEAKER, payload: res.data });
    } catch (err) {
      dispatch({ type: SNEAKER_ERROR, payload: err.response.msg });
    }
  };

  // Clear Sneakers
  const clearSneakers = () => {
    dispatch({ type: CLEAR_SNEAKERS });
  };

  // Set Curent Sneaker
  const setCurrent = (sneaker) => {
    dispatch({ type: SET_CURRENT, payload: sneaker });
  };

  // Clear Current Sneaker
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Sneaker
  const filterSneakers = (text) => {
    dispatch({ type: FILTER_SNEAKERS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <SneakerContext.Provider
      value={{
        sneakers: state.sneakers,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addSneaker,
        deleteSneaker,
        setCurrent,
        clearCurrent,
        updateSneaker,
        filterSneakers,
        clearFilter,
        getSneakers,
        clearSneakers,
      }}
    >
      {props.children}
    </SneakerContext.Provider>
  );
};

export default SneakerState;
