import axios from "axios";
import { useState, useEffect } from "react";

/* Fetch currency details */
const useFetch = (url,from) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url+from).then((data) => {
        setData(data);
      console.log(data);
    });
  }, [url,from]);
  return [data]
};
export default useFetch;
