import React from "react";
import { getImageRoute } from "../utility/functions";

export function FlightLogo({
    flight
}) {
    return <div className="flight-service d-flex align-items-center justify-content-center">
        <img src={getImageRoute(flight["airlineLogo"])} alt={"airline logo"} />
    </div>;
}
  