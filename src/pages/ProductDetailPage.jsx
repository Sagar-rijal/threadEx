import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = Number(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center space-y-3">
          <h1 className="text-2xl font-semibold text-slate-900">
            Product not found
          </h1>
          <p className="text-sm text-slate-500">
            The item you’re looking for is not available.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold px-6 py-2.5 hover:bg-slate-800 transition-colors"
          >
            Back to shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8 text-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <span className="text-lg">←</span> Back to shop
          </Link>
        </div>

        {/* Main content */}
        <div className="grid gap-8 md:gap-10 md:grid-cols-[340px,1fr] items-start">
          {/* LEFT: image (SIZE UNCHANGED) */}
          <div className="flex justify-center ">
            <div className="w-[620px] h-[400px] rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div></div>
            </div>
          </div>

          {/* RIGHT: info */}
          <div className="space-y-6">
            {/* Title & category */}
            <div className="space-y-2">
              <span className="inline-flex px-3 py-1 rounded-full bg-slate-100 text-xs uppercase tracking-[0.2em] text-slate-600">
                {product.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <p className="text-2xl font-semibold text-slate-900">
                ₹{product.price}
              </p>
              <p className="text-xs text-slate-500">
                Inclusive of all taxes · Free shipping above ₹999
              </p>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              {product.description ||
                'ThreadEx essentials crafted for everyday wear, inspired by modern streetwear and built for comfort.'}
            </p>

            {/* Size selector (static UI) */}
            <div className="border border-slate-200 rounded-2xl bg-slate-50/60 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Select size
                </h3>
                <button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition">
                  Size guide →
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="w-11 h-10 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:border-slate-400 hover:bg-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500">
                Oversized fit · Pick your regular size for a relaxed look.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold px-6 py-3 hover:bg-slate-800 transition-colors"
              >
                Add to bag
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-white transition px-5 py-3 text-sm font-semibold"
              >
                ♡ Wishlist
              </button>
            </div>

            {/* Extra info */}
            <div className="grid sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="border border-slate-200 rounded-2xl p-3">
                <p className="font-semibold text-slate-900 text-sm">
                  Easy returns
                </p>
                <p className="mt-1">
                  7-day exchange & hassle-free returns on all orders.
                </p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-3">
                <p className="font-semibold text-slate-900 text-sm">
                  COD available
                </p>
                <p className="mt-1">
                  Cash on Delivery for most pincodes across India.
                </p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-3">
                <p className="font-semibold text-slate-900 text-sm">
                  Fast shipping
                </p>
                <p className="mt-1">
                  Orders ship within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;