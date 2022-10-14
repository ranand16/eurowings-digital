import { combineReducers } from "redux";
import FlightReducer from "./flight-reducer";


export const allReducers = combineReducers({
    flights: FlightReducer
})