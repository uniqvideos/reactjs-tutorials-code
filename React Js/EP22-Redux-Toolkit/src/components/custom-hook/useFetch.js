import { useEffect, useState } from "react";
import axios from "axios"

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        // let response = await fetch(url);
        // if (response.ok) {
        //   let data = await response.json();
          
        //   setProducts(data);
        // } else {
        //   throw new Error("Data Not Found");
        // }
        let response = await axios.get( url )
        setProducts( response.data );

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { products, error, isLoading, setProducts}
}
export default useFetch;
