import { useApi } from "../../hooks/useFetch";

export const flightApi = () => useApi('http://localhost:8087/flights')
    .then(response => response.json())
    .catch((error) => {throw error});