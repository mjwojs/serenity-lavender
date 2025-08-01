// components/Navbar.tsx
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "./assets/logo_text_clear.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 sm:h-10 max-w-[100px] sm:max-w-[140px] w-auto object-contain"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-800">
          <a href="#about" className="hover:text-purple-600">About</a>
          <a href="#experience" className="hover:text-purple-600">Experience</a>
          <a href="#photos" className="hover:text-purple-600">Photos</a>
          <a href="#prices" className="hover:text-purple-600">Prices</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </nav>

        {/* Phone number */}
        <div className="hidden md:block text-gray-600 text-sm font-medium">
          📞 +48 123 456 789
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 font-medium text-gray-800 shadow-md">
          <a href="#about" onClick={() => setOpen(false)}>About</a><br />
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a><br />
          <a href="#photos" onClick={() => setOpen(false)}>Photos</a><br />
          <a href="#prices" onClick={() => setOpen(false)}>Prices</a><br />
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a><br />
          <div className="pt-2 text-sm text-gray-600">
            📞 +48 123 456 789
          </div>
        </div>
      )}
    </header>
  );
}
