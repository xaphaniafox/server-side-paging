import { useEffect, useState } from "react";
import _ from "lodash";

const usePaginatedFetch = (url, pageSize) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    const paginatedData = _.chunk(data, pageSize);
    console.log(paginatedData);

    setLoading(false);
    setData(paginatedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return [loading, data];
};

export default usePaginatedFetch;
