import React from "react";

function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 py-4 text-center text-xs text-slate-500">
      <p>© {new Date().getFullYear()} ThreadEx</p>
    </footer>
  );
}

export default Footer;