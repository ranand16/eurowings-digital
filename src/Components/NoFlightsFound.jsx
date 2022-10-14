import React from "react";
import { getImageRoute } from "../utility/functions";

export function NoFlightsFound() {
  return <p 
    className="d-flex flex-col align-items-center justify-content-center" 
    style={{height: "100vh"}}
  >
        No Flights found!
        <img src={getImageRoute("no-found.jpeg")} alt={"No flights found!"} />
    </p>;
}
  