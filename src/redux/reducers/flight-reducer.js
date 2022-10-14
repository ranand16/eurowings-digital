import { GET_FLIGHTS_FAILED, GET_FLIGHTS_REQUESTED, GET_FLIGHTS_SUCCESS } from "../types"

const initialState = {
  flights: [],
  loading: false,
  error: null,
}

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_FLIGHTS_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case GET_FLIGHTS_SUCCESS:
      return {
        ...state,
        loading: false,
        flights: action.flights["flights"]
      }
    case GET_FLIGHTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}