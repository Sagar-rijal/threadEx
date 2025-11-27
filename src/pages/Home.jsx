import React, { useState } from "react";
import ProductGrid, { MOCK_PRODUCTS } from "../components/product/ProductGrid.jsx";
import FiltersBar from "../components/product/FiltersBar.jsx";
import { useSearch } from "../context/SearchContext.jsx";
import HeroSection from "../components/layout/HeroSection.jsx";
import heroVideo from "../assets/myvideo.mp4"; // <-- correct relative path from pages/

function Home() {
  const [genderFilter, setGenderFilter] = useState("all");
  const { searchText } = useSearch();

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    // 1) gender filter
    if (genderFilter !== "all" && product.gender !== genderFilter) {
      return false;
    }

    // 2) search filter
    if (!searchText || searchText.trim() === "") {
      return true;
    }

    const name = product.name.toLowerCase();
    const query = searchText.toLowerCase();
    return name.includes(query);
  });

  return (
    <div className="">
      {/* Hero section between navbar and product grid */}
      <HeroSection video={heroVideo} />

      <div className="px-4 md:px-10 py-5">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">
          New Arrivals
        </h1>
        <FiltersBar
          genderFilter={genderFilter}
          setGenderFilter={setGenderFilter}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

export default Home;

