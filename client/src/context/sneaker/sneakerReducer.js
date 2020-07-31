import {
  GET_SNEAKERS,
  ADD_SNEAKER,
  DELETE_SNEAKER,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SNEAKER,
  FILTER_SNEAKERS,
  CLEAR_FILTER,
  SNEAKER_ERROR,
  CLEAR_SNEAKERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SNEAKERS:
      return {
        ...state,
        sneakers: action.payload,
        loading: false,
      };
    case ADD_SNEAKER:
      return {
        ...state,
        sneakers: [action.payload, ...state.sneakers],
        loading: false,
      };
    case UPDATE_SNEAKER:
      return {
        ...state,
        sneakers: state.sneakers.map((sneaker) =>
          sneaker._id === action.payload._id ? action.payload : sneaker
        ),
        loading: false,
      };
    case DELETE_SNEAKER:
      return {
        ...state,
        sneakers: state.sneakers.filter(
          (sneaker) => sneaker._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_SNEAKERS:
      return {
        ...state,
        sneakers: null,
        filtered: null,
        error: null,
        current: null,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_SNEAKERS:
      return {
        ...state,
        filtered: state.sneakers.filter((sneaker) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return sneaker.make.match(regex) || sneaker.brand.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case SNEAKER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
