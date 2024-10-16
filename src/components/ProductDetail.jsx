import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ProductImagesCarousel from "./ProductImagesCarousel";
import useFetchProducts from "../hooks/useFetchProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, error } = useFetchProducts(id);
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
      <ProductImagesCarousel images={product.images} />
      <div className="flex justify-between mt-4">
        <span className="text-lg font-semibold">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-gray-600">{product.availabilityStatus}</span>
      </div>
      <p className="mt-2 text-gray-700">{product.description}</p>

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

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Product Details</h3>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
        <p>
          <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
          {product.dimensions.height} x {product.dimensions.depth}
        </p>
        <p>
          <strong>Weight:</strong> {product.weight}
        </p>
        <p>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping:</strong> {product.shippingInformation}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Reviews</h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="border-b py-2">
              <p>
                <strong>{review.reviewerName}:</strong> {review.comment}
              </p>
              <p className="text-gray-600">Rating: {review.rating} ⭐</p>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
