import { useEffect, useState } from "react";

const useFetch = (url, sieveModel) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(sieveModel),
      headers: {
        "content-type": "application/json;charset-UTF-8",
      },
    });
    const data = await response.json();

    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [sieveModel.page]);

  return [loading, data];
};

export default useFetch;
