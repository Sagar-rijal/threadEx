import React from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "men", label: "Men" },
  { key: "women", label: "Women" },
  { key: "unisex", label: "Unisex" },
];

function FiltersBar({ genderFilter, setGenderFilter }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          type="button"
          onClick={() => setGenderFilter(filter.key)}
          className={
            "px-3 py-1 rounded-full border transition-colors " +
            (genderFilter === filter.key
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100")
          }
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default FiltersBar;