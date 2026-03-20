import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-15 h-15 rounded-full bg-amber-100 flex items-center justify-center">
            <Image src="/logo1.png" alt="Genancia Logo" width={50} height={50} className="rounded-full" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-gray-900 text-sm">Genancia</p>
            <p className="text-amber-600 text-xs font-medium">Beacon of Hope</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-amber-600 transition-colors">Projects</a>
          <a href="#gallery" className="hover:text-amber-600 transition-colors">Gallery</a>
          <a href="#testimonials" className="hover:text-amber-600 transition-colors">Testimonials</a>
          <a href="#donate" className="hover:text-amber-600 transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <a
          href="#donate"
          className="hidden md:inline-block bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Donate Now
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Projects</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Gallery</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="hover:text-amber-600">Testimonials</a>
          <a href="#donate" onClick={() => setMenuOpen(false)} className="bg-amber-600 text-white text-center py-2 rounded-full">Donate Now</a>
        </div>
      )}
    </nav>
  );
}