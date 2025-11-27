import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
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
        <div className="p-3">
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
    </article>
  );
}

export default ProductCard;