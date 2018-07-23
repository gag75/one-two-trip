export const FLIGHTS = 'FLIGHTS';
export const FLIGHTS_SELECT_CARRIER = FLIGHTS + '_SELECT_CARRIER';

export const getFlights = (isSuccess = true, time = 0) => {
  return {
    type: FLIGHTS,
    api: {
      isSuccess,
      time,
    },
  };
}

export const selectCarrier = (value) => {
  return {
    type: FLIGHTS_SELECT_CARRIER,
    payload: {
      selectedCarrier: value,
    }
  };
}