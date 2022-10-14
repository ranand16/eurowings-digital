import React from "react";
import { getImageRoute } from "../utility/functions";
export function FlightPrice({
    flight
}) {
  return <div className="flight-price d-flex flex-col justify-content-center align-items-center">
        <div className="color-gray-500 font-size-3 line-height-4 fw-400">Price starts from</div>
        <div className="color-spanish-roast font-size-5 line-height-7 fw-400">{flight["currency"]}{flight["price"]}</div>
        <button className="d-flex align-items-center justify-content-center font-size-5 color-pure-white bg-color-pantone">
            Book&nbsp;
            <img src={getImageRoute("arrow.png")} alt={"book"} /> 
        </button>
    </div>;
}
  