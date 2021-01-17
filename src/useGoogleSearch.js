import React, { useState, useEffect } from "react";
import API_KEY from "./keys";
import { useStateValue } from "./StateProvider";

const CONTEXT_KEY = "c5828959ebd616423";

const useGoogleSearch = () => {
  const [data, setData] = useState(null);
  const [{ term }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}
                &cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
