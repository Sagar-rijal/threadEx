import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartCount } from "../feature/cart/cartSlice.js";
import CartItemCard from "../components/cart/CartItemCard.jsx";

function CartPage() {
  const items = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-2xl font-semibold mb-4 text-slate-900">
          Your bag is empty
        </h1>
        <p className="text-sm text-slate-500">
          Add some pieces you like and they&apos;ll show up here.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 grid gap-8 md:grid-cols-[2fr,1fr]">
      {/* Left: items */}
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold mb-2 text-slate-900">
          Your bag ({cartCount})
        </h1>
        {items.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Right: summary */}
      <aside className="h-fit border border-slate-200 rounded-xl p-4 md:p-5 bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">
          Order Summary
        </h2>
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-medium text-slate-900">₹{total}</span>
        </div>
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-slate-600">Shipping</span>
          <span className="text-slate-500">Calculated at checkout</span>
        </div>
        <div className="border-t border-slate-200 pt-3 mt-2 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-900">Total</span>
          <span className="text-base font-semibold text-slate-900">
            ₹{total}
          </span>
        </div>
        <button
          type="button"
          className="mt-5 w-full rounded-full bg-slate-900 text-white text-sm font-semibold py-2.5 hover:bg-slate-800 transition-colors"
        >
          Checkout
        </button>
      </aside>
    </div>
  );
}

export default CartPage;