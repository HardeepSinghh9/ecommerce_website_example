import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { lazy, Suspense } from "react";
import { selectCartItems } from "../redux/cartSlice";

// Lazy load the shopping cart icon, it was taking too much time on network when on 3g or even fast4g.
const FaShoppingCart = lazy(() =>
  import("react-icons/fa").then((module) => ({
    default: module.FaShoppingCart,
  }))
);

const Header = () => {
  const cartItems = useSelector(selectCartItems); // cart items from Redux
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="p-6 w-full fixed top-0 left-0 right z-10 bg-gray-900 text-white">
      <div className="flex justify-between mx-5">
        <Link
          to="/"
          className="hover:text-gray-300 transition-colors duration-300"
        >
          <h1>ShoppyGlobe</h1>
        </Link>

        <nav className="flex items-center">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>

          <Link
            to="/cart"
            className="ml-4 hover:text-gray-300 transition-colors duration-300 flex items-center"
          >
            {/* Lazy load the shopping cart icon, cart is still clickable even when the icon is not loaded*/}
            <Suspense fallback={<div>Cart</div>}>
              <FaShoppingCart size={24} />
            </Suspense>
            {totalItems > 0 && (
              <span className="ml-2 bg-red-500 text-white text-sm font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
