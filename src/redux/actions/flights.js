import { GET_FLIGHTS_REQUESTED } from "../types";

export function createGetFlightsAction() {
  return { 
    type: GET_FLIGHTS_REQUESTED
  }
}