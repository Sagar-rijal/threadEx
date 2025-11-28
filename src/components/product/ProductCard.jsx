import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementItem,
  decrementItem,
  selectCartItems,
} from "../../feature/cart/cartSlice.js";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems.find((i) => i.id === product.id);
  const quantity = cartItem?.quantity ?? 0;

  function handleAddToCart(e) {
    e.preventDefault(); // don't navigate when clicking in card
    dispatch(addToCart(product));
  }

  function handleIncrement(e) {
    e.preventDefault();
    dispatch(incrementItem(product.id));
  }

  function handleDecrement(e) {
    e.preventDefault();
    dispatch(decrementItem(product.id));
  }

  return (
    <article className="group border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 pb-2">
          <h3 className="text-sm font-medium text-slate-900 truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500 uppercase">
            {product.category}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-900">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="px-3 pb-3">
        {quantity === 0 ? (
          // Not in cart yet -> show Add to Cart
          <button
            type="button"
            onClick={handleAddToCart}
            className="w-full text-xs md:text-sm py-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            Add to Cart
          </button>
        ) : (
          // Already in cart -> show - qty +
          <div className="flex items-center justify-between rounded-full border border-slate-300 px-2 py-1 text-xs md:text-sm">
            <button
              type="button"
              onClick={handleDecrement}
              className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800"
            >
              -
            </button>
            <span className="min-w-[2rem] text-center text-slate-900 font-medium">
              {quantity}
            </span>
            <button
              type="button"
              onClick={handleIncrement}
              className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white"
            >
              +
            </button>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProductCard;