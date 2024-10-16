import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductImagesCarousel from "./ProductImagesCarousel";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <ProductImagesCarousel images={product.images} />

      {/* Link to Product Detail */}
      <h3 className="text-lg font-semibold mt-2">
        <Link to={`/product/${product.id}`} className="hover:underline">
          {product.title}
        </Link>
      </h3>

      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className={`mt-2 p-2 w-28 rounded transition-colors duration-200 ${
          isClicked
            ? "bg-green-600 text-white"
            : "bg-gray-800 text-white hover:bg-gray-400"
        }`}
      >
        {isClicked ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
};
export default ProductItem;
