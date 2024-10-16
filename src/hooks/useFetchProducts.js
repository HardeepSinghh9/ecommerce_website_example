import { useState, useEffect } from "react";
const useFetchProducts = (id = null) => {
  const [data, setData] = useState(id ? null : []); // Single product or list of products
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id
          ? `https://dummyjson.com/products/${id}`
          : "https://dummyjson.com/products";
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch product(s)");
        }

        const result = await response.json();
        if (id) {
          setData(result); //if parameter have id passed initially set to null and if changed then this is provided.
        } else {
          setData(result.products); //products if fetching all
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  return { data, error };
};

export default useFetchProducts;
