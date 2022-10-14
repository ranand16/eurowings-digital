import React from "react";
import { getImageRoute } from "../utility/functions";
export function FlightDetails({
    flight
}) {
  return <div className="flight-details d-flex align-items-center p-4 position-relative">
        <div className="d-flex flex-col align-items-end">
            <div className="color-approx-comet font-size-6">{flight["departureTime"]}</div>
            <div className="color-dolphin">{flight["origin"]}</div>
        </div>
        <div className="flight-duration font-size-3 color-gray-600 position-absolute absolute-horizontal-center">
            {flight["duration"]}
        </div>
        <div className="flight-map position-relative text-align-center ml-2 mr-1 d-block"></div>
        <img src={getImageRoute("fly.png")} width={"16px"} height={"16px"} alt={"fly"} />
        <div className="flight-map position-relative text-align-center ml-1 mr-2 d-block"></div>
        <div className="d-flex flex-col align-items-start">
            <div className="color-approx-comet font-size-6">{flight["arrivalTime"]}</div>
            <div className="color-dolphin">{flight["destination"]}</div>
        </div>
    </div>;
}
  