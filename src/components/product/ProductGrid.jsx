import React from "react";
import ProductCard from "./ProductCard.jsx";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Oversized Black T‑Shirt",
    gender: "men",
    category: "T‑Shirts",
    price: 799,
    originalPrice: 1199,
    image: "https://picsum.photos/400/533?random=1",
  },
  {
    id: 2,
    name: "Relaxed Fit Hoodie",
    gender: "men",
    category: "Hoodies",
    price: 1499,
    originalPrice: 1999,
    image: "https://picsum.photos/400/533?random=2",
  },
  {
    id: 3,
    name: "Graphic Tee – White",
    gender: "women",
    category: "T‑Shirts",
    price: 899,
    originalPrice: 1299,
    image: "https://picsum.photos/400/533?random=3",
  },
  {
    id: 4,
    name: "Minimal Logo Cap",
    gender: "unisex",
    category: "Accessories",
    price: 499,
    originalPrice: 699,
    image: "https://picsum.photos/400/533?random=4",
  },
];

function ProductGrid({ products }) {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export { MOCK_PRODUCTS };
export default ProductGrid;