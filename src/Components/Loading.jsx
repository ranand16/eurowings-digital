import React from "react";
import { getImageRoute } from "../utility/functions";

export function Loading() {
  return <p 
        className="d-flex align-items-center justify-content-center" 
        style={{height: "100vh"}}
    >
        <img src={getImageRoute("loading.gif")} alt={"Loading..."} />                
    </p>;
}
  