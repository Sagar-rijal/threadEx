import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-950 text-slate-200">
      {/* Top: columns */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand + about */}
        <div>
          <h3 className="text-lg font-semibold tracking-wide">ThreadEx</h3>
          <p className="mt-3 text-sm text-slate-400">
            Minimal streetwear and everyday essentials. Designed for comfort,
            made to stand out.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Shop
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                to="/shop?category=men"
                className="hover:text-white transition-colors"
              >
                Men
              </Link>
            </li>
            <li>
              <Link
                to="/shop?category=women"
                className="hover:text-white transition-colors"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/shop?category=sale"
                className="hover:text-white transition-colors"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-white transition-colors"
              >
                New Arrivals
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Help
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/support" className="hover:text-white transition-colors">
                Customer Support
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-white transition-colors">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Stay in the loop
          </h4>
          <p className="mt-3 text-sm text-slate-400">
            Be the first to know about drops, restocks, and exclusive offers.
          </p>
          <form
            className="mt-3 flex items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-slate-900 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-slate-400"
            />
            <button
              type="submit"
              className="rounded-full bg-slate-100 text-slate-900 text-xs font-semibold px-4 py-2 hover:bg-white transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom: small bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ThreadEx. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;