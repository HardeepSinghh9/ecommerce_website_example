import React from "react";
import ProductItem from "./ProductItem";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = () => {
  //i have used the custom hook for fetching..
  const { data: products, error } = useFetchProducts(); // Fetch all products

  if (error) return <div>Error: {error}</div>;
  if (!products || !products.length) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
