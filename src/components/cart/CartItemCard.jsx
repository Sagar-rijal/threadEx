import React from "react";
import { useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../../feature/cart/cartSlice.js";

function CartItemCard({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItem(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(item.id));
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="flex gap-4 border border-slate-200 rounded-xl p-3 md:p-4 bg-white shadow-sm">
      {/* Image */}
      <div className="h-24 w-24 md:h-28 md:w-28 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Top: name + category + price */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm md:text-base font-semibold text-slate-900">
              {item.name}
            </h3>
            <p className="mt-1 text-xs md:text-sm text-slate-500 uppercase">
              {item.category}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm md:text-base font-semibold text-slate-900">
              ₹{item.price}
            </p>
            {item.originalPrice && (
              <p className="text-xs text-slate-400 line-through">
                ₹{item.originalPrice}
              </p>
            )}
          </div>
        </div>

        {/* Bottom: quantity controls + subtotal */}
        <div className="mt-3 flex items-center justify-between">
          {/* Quantity controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDecrement}
              className="h-8 w-8 flex items-center justify-center rounded-full border border-slate-300 text-slate-800 hover:bg-slate-100"
            >
              -
            </button>
            <span className="min-w-[2rem] text-center text-sm font-medium text-slate-900">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={handleIncrement}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-900 text-white hover:bg-slate-800"
            >
              +
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-right">
            <p className="text-xs text-slate-500">Subtotal</p>
            <p className="text-sm md:text-base font-semibold text-slate-900">
              ₹{subtotal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;