// useFetch hook

import { useState, useEffect } from "react";

export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [postData, setPostData] = useState(null);

  const addNewData = (user) => {
    setPostData({
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  useEffect(() => {
    const fetchData = async (fetchConfig) => {
      setIsPending(true);
      try {
        const req = await fetch(url, { ...fetchConfig });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(error.message);
      }
    };
    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && postData) {
      fetchData(postData);
    }
  }, [url, method, postData]);

  return { data, isPending, error, addNewData };
}
