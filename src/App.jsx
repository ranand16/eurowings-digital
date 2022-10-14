import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGetFlightsAction } from "./redux/actions/flights";

import { Loading } from "./Components/Loading.jsx";
import { FlightPrice } from './Components/FlightPrice.jsx';
import { FlightDetails } from './Components/FlightDetails.jsx';
import { FlightLogo } from './Components/FlightLogo.jsx';
import { NoFlightsFound } from './Components/NoFlightsFound.jsx';

const App = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch();
    const allflights = useSelector(state => state.flights.flights);
    const loading = useSelector(state => state.flights.loading);
    const error = useSelector(state => state.flights.error);

    useEffect(() => {
      dispatch(createGetFlightsAction());
    }, []);

    // This is frontend side filtering
    // Filtering based on origin or destination codes
    const flights = search.length === 0 ? allflights
    : allflights.filter(flight =>                         
        flight.origin.toLowerCase().includes(search.toLowerCase()) || flight.destination.toLowerCase().includes(search.toLowerCase()) )

    return <div className="container">
        {loading && <Loading />}
        {flights.length === 0 && !loading && <NoFlightsFound />}
        {error && !loading && <p>{error}</p>}
        <div className="d-flex flex-col">
            <input 
                type="text" 
                placeholder="Search origin, destination" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {
                flights.length > 0 && flights.map((flight) => (
                    <React.Fragment key={flight["uuid"]}>
                        <div className="flight-card d-flex flex-col align-items-stretch mb-3 p-4 cursor-pointer no-text-decoration color-spanish-roast bg-color-white">
                            <FlightLogo flight={flight} />
                            <FlightDetails flight={flight} />
                            <FlightPrice flight={flight} />
                        </div>
                        <br/>
                    </React.Fragment>
                )
            )}
        </div>
    </div>
}

export default App;