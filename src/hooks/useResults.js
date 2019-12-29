import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async keyword => {
    console.log("hi there");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: "dog parks",
          // categories: "dog_parks",
          location: keyword
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };

  // call search api when component is first renderedd

  useEffect(() => {
    searchApi("portland");
  }, []);
  return [searchApi, results, errorMessage];
};
