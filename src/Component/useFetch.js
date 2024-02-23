import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    console.log("render comp");
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch from this resource");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          setError("Fetch Aborted");
        } else {
          setError(error.message);
        }
      })
      .finally(() => setIsLoading(false));

    return () => {
      console.log("clean-up");
      abortCont.abort();
    };
  }, [url]);
  return [data, error, isLoading];
};

export default UseFetch;
