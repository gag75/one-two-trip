import { FLIGHTS, FLIGHTS_SELECT_CARRIER } from './actions/flight.actions';
import { LOAD_START, LOAD_SUCCESS, LOAD_ERROR } from './middlewares/api';

const initialState = {
  flights: [],
  selectedCarrier: "ALL",
  isLoad: false,
  error: "",
};

export default (state = initialState, action) => {
  const {type, payload, error} = action;
  switch(type) {
    case FLIGHTS + LOAD_START: return {...state, isLoad: true};
    case FLIGHTS + LOAD_SUCCESS: return {...state, flights: payload.flights};
    case FLIGHTS + LOAD_ERROR: return {...state, error: error};
    case FLIGHTS_SELECT_CARRIER: return{...state, selectedCarrier: payload.selectedCarrier};
    default:
      return state;
  }
}