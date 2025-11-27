import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext.jsx";

function Navbar() {
  const { searchText, setSearchText } = useSearch();

  return (
    <header className="relative flex items-center justify-between px-6 py-7 bg-black text-slate-50">
      {/* LEFT: Men / Women / Sale */}
      <nav className="flex items-center gap-5 text-base">
        <Link to="/shop?category=men" className="hover:text-slate-300">
          Men
        </Link>
        <Link to="/shop?category=women" className="hover:text-slate-300">
          Women
        </Link>
        <Link
          to="/shop?category=sale"
          className="text-red-400 hover:text-red-300 font-semibold"
        >
          Sale
        </Link>
      </nav>

      {/* CENTER: Logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link to="/" className="inline-block">
          <img
            src="//threadex.in/cdn/shop/files/logo_threadex_2_c7e2e24c-356b-491a-93f0-de169c62701f.png?v=1760342482&width=280"
            alt="ThreadEx"
            className="h-10 w-auto logo-animate"
          />
        </Link>
      </div>

      {/* RIGHT: Search + Login + Profile + Cart */}
      <div className="flex items-center gap-4 text-base">
        <div className="hidden md:flex items-center bg-slate-800 rounded-full px-3 py-1.5">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent text-sm outline-none placeholder:text-slate-400 text-slate-100"
          />
        </div>

        <Link
          to="/login"
          className="px-4 py-1.5 rounded-full border border-slate-500 hover:bg-slate-800 transition-colors text-sm"
        >
          Login
        </Link>

        <Link
          to="/profile"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-600 text-sm font-semibold"
        >
          P
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center justify-center h-9 w-9 rounded-full bg-slate-700 hover:bg-slate-600"
        >
          <span className="text-xl leading-none">🛒</span>
        </Link>
      </div>

     
    </header>
  );
}

export default Navbar;