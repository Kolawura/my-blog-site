import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

      fetch(url, { signal: abortCont.signal })
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
    // return () => abortCont.abort();
  }, [url]);
  return [data, error, isLoading];
};

export default UseFetch;
