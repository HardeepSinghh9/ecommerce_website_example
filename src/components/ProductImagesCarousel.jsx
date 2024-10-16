import React, { useState } from "react";

const ProductImagesCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mb-4">
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-l"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 bg-opacity-50 p-2 rounded-r"
          >
            &gt;
          </button>
        </>
      )}
      <img
        src={images[currentIndex]}
        alt={`Product Image ${currentIndex + 1}`}
        className="w-full h-60 object-cover rounded-lg"
      />
    </div>
  );
};

export default ProductImagesCarousel;
