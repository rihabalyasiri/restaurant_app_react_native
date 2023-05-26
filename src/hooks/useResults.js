import { useEffect, useState } from "react";
import yelpAPI from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelpAPI.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Düsseldorf",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("there is a problem happend with the server.");
    }
  };

  //searchApi("pasta");
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
